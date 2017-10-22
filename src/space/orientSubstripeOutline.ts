import {
	Coordinate,
	from,
	Outline,
	rotateCoordinateAboutPoint,
	tileCenter,
	ShapeColorIndex,
	to,
	Unit,
} from '../../../../src'

const orientSubstripeOutline: (_: {
	colorsCount: number, outline: Outline, shapeColorIndex: ShapeColorIndex, tileOrigin: Coordinate, tileSize: Unit,
}) => Outline = ({ colorsCount, outline, shapeColorIndex, tileOrigin, tileSize }) => {
	const rotationUnit = Math.PI / colorsCount
	const rotation = to.Radian(rotationUnit * from.ShapeColorIndex(shapeColorIndex))

	return outline.map(coordinate => rotateCoordinateAboutPoint({
		coordinate,
		point: tileCenter({ tileOrigin, tileSize }),
		rotation,
	}))
}

export { orientSubstripeOutline }
