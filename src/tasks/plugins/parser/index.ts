import {
    pipe,
    clone,
    map,
    filter,
    where,
    equals,
    gt as greaterThan,
    both,
    unless,
    length,
    dissoc as deleteProp,
    reduce,
    path as get,
    __,
    applyTo,
    defaultTo,
    objOf,
    assoc
} from 'ramda';
import parseXML, { XmlElement } from '@rgrove/parse-xml';
import { AbstractNode } from '../../templates/ts/types';
import File from 'vinyl';



export interface XML2AbstractNodeOptions {
    name: string;
}


export default function parseSvg(svgString: string, file: File) {
  const { stem: name } = file;

    return applyTo(svgString)(
        pipe(
          parseXML,
  
          pipe(
            get<XmlElement>(['children', 0]),
            defaultTo(({} as any) as XmlElement)
          ),

  
          element2AbstractNode({
            name,
          }),
  
          pipe(objOf('icon'), assoc('name', name)),
          defaultTo(JSON.stringify)(JSON.stringify)
        )
      )

}

function element2AbstractNode({
    name
  }: XML2AbstractNodeOptions) {
    return ({ name: tag, attributes, children }: XmlElement): AbstractNode =>
        applyTo({
            tag,
            attrs: clone(attributes),
            children: applyTo(children as XmlElement[])(
            pipe(
                filter<XmlElement, 'array'>(where({ type: equals('element') })),
                map(
                element2AbstractNode({
                    name
                })
                )
            )
            )
        })(
            unless<AbstractNode, AbstractNode>(
            where({
                children: both(Array.isArray, pipe(length, greaterThan(__, 0)))
            }),
            deleteProp('children')
            )
        )
  }