import { Outline, ShapeColorIndex, solid, to, Unit } from '../../../../../src'
import { orientSubstripeOutline, substripe, substripeOutline } from '../../../pattern'

describe('substripe', () => {
	const tileSize: Unit = to.Unit(13)
	const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(1)
	const substripeIndex: number = 5
	const substripeCount: number = 17

	const outline: Outline = []
	const orientedOutline: Outline = []

	beforeEach(() => {
		spyOn(substripeOutline, 'default').and.returnValue(outline)
		spyOn(orientSubstripeOutline, 'default').and.returnValue(orientedOutline)
		spyOn(solid, 'default')

		substripe.default({ tileSize, shapeColorIndex, substripeIndex, substripeCount })
	})

	it('gets the substripe outline', () => {
		expect(substripeOutline.default).toHaveBeenCalledWith({
			substripeCount,
			substripeIndex,
			tileSize,
		})
	})

	it('orients the outline', () => {
		expect(orientSubstripeOutline.default).toHaveBeenCalledWith({
			outline,
			shapeColorIndex,
		})
	})

	it('sends the result to be rendered as a solid filled path', () => {
		expect(solid.default).toHaveBeenCalledWith({
			outline: orientedOutline,
			shapeColorIndex: substripeIndex,
		})
	})
})
