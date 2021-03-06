// tslint:disable:no-unsafe-any

import {
	ComponentParams,
	Coordinate,
	Outline,
	patternState,
	rotateCoordinate,
	ShapeColorIndex,
	to,
} from '../../../../../src/indexForTest'
import Spy = jasmine.Spy
import { isCloseTo } from '../../../../../test'
import { orientSubstripeOutline } from '../../../pattern'

describe('orient substripe outline', () => {
	it('orients the substripe outline according to the index of the solid color it would have been', () => {
		const subject: (_: ComponentParams) => Outline = orientSubstripeOutline.default
		const rotatedCoordinate: Coordinate = to.Coordinate([])
		const rotateCoordinateSpy: Spy = spyOn(rotateCoordinate, 'default').and.returnValue(rotatedCoordinate)

		patternState.gridSettings.tileResolution = 3
		patternState.tileSettings.tileSize = to.Unit(5)

		const coordinate: Coordinate = to.Coordinate([])

		patternState.colorSettings.colorSet = to.ColorSet([ { a: 0 }, { a: 0 } ])
		const shapeColorIndex: ShapeColorIndex = to.ShapeColorIndex(7)
		const outline: Outline = to.Outline([ coordinate ])

		const actualOutline: Outline = subject({
			outline,
			shapeColorIndex,
		})

		expect(rotateCoordinateSpy.calls.all()[ 0 ].args[ 0 ].coordinate).toEqual(coordinate)
		expect(rotateCoordinateSpy.calls.all()[ 0 ].args[ 0 ].fixedCoordinate).toEqual(to.Coordinate([ 7.5, 7.5 ]))
		expect(isCloseTo(rotateCoordinateSpy.calls.all()[ 0 ].args[ 0 ].rotation, 11)).toBe(true)
		expect(actualOutline[ 0 ]).toBe(rotatedCoordinate)
	})
})
