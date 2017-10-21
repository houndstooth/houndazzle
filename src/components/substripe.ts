import { Context, Coordinate, solid, Unit } from '../../../../src'
import { orientSubstripeOutline, substripeOutline } from '../space'

const substripe: (_: {
		colorsCount: number,
		context: Context,
		shapeColorIndex: number,
		substripeCount: number,
		substripeIndex: number,
		tileOrigin: Coordinate,
		tileSize: Unit,
	}) => void = ({ context, tileOrigin, tileSize, shapeColorIndex, substripeIndex, substripeCount, colorsCount }) => {
	let outline = substripeOutline({ tileOrigin, tileSize, substripeIndex, substripeCount })
	outline = orientSubstripeOutline({ colorsCount, shapeColorIndex, outline, tileOrigin, tileSize })
	solid({ context, outline, shapeColorIndex: substripeIndex })
}

export { substripe }
