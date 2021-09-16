"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ramda_1 = require("ramda");
const parse_xml_1 = __importDefault(require("@rgrove/parse-xml"));
function parseSvg(svgString, file) {
    const { stem: name } = file;
    return ramda_1.applyTo(svgString)(ramda_1.pipe(parse_xml_1.default, ramda_1.pipe(ramda_1.path(['children', 0]), ramda_1.defaultTo({})), element2AbstractNode({
        name,
    }), ramda_1.pipe(ramda_1.objOf('icon'), ramda_1.assoc('name', name)), ramda_1.defaultTo(JSON.stringify)(JSON.stringify)));
}
exports.default = parseSvg;
function element2AbstractNode({ name }) {
    return ({ name: tag, attributes, children }) => ramda_1.applyTo({
        tag,
        attrs: ramda_1.clone(attributes),
        children: ramda_1.applyTo(children)(ramda_1.pipe(ramda_1.filter(ramda_1.where({ type: ramda_1.equals('element') })), ramda_1.map(element2AbstractNode({
            name
        }))))
    })(ramda_1.unless(ramda_1.where({
        children: ramda_1.both(Array.isArray, ramda_1.pipe(ramda_1.length, ramda_1.gt(ramda_1.__, 0)))
    }), ramda_1.dissoc('children')));
}
