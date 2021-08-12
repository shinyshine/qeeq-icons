import { pipe } from 'ramda';
import upperFirst from 'lodash.upperfirst';
import camelCase from 'lodash.camelcase';

export default pipe(
    (name: string) => name,
    camelCase,
    upperFirst
)
    