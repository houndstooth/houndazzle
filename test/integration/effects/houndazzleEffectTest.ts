import houndazzleEffect from '../../../effects/houndazzleEffect'
import activateTestMarkerCanvas from '../../../../../test/integration/helpers/activateTestMarkerCanvas'
import { expectSection } from '../helpers/sectionExpections'
import { Address, Coordinate, state, executeSelectedHoundstoothEffects } from '../../../../../src'
import { HoundazzleFill, HoundazzleSectionExpectation } from '../helpers/types'
import { Diagonal } from '../../../../../test/integration/helpers/types'
import CanvasSize from '../../../../../src/canvas/types/CanvasSize'

describe('houndazzle effect', () => {
	it('does houndstooth w/ horizontal against vertical striped textures, not simply black against white', () => {
		state.selectedHoundstoothEffects = [ houndazzleEffect ]
		const tileSize = 200
		const houndstoothOverrides = {
			basePattern: {
				tileSettings: {
					tileSizeSetting: tileSize,
				},
				gridSettings: {
					gridSize: 4,
				},
				viewSettings: {
					canvasSize: 800 as CanvasSize,
				},
			},
		}
		activateTestMarkerCanvas()

		executeSelectedHoundstoothEffects({ houndstoothOverrides })

		const partA = [
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
		] as HoundazzleSectionExpectation[][]

		const partB = [
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
			[
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
			],
			[
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.Black ],
				[ Diagonal.SolidButTestMinorToAvoidSeam, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
				[ Diagonal.Solid, HoundazzleFill.White ],
			],
		] as HoundazzleSectionExpectation[][]
		const topLeftTile = partA.concat(partB) as HoundazzleSectionExpectation[][]

		const alteratingRow = [
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
		]
		const topRightTile = [
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
			alteratingRow,
		] as HoundazzleSectionExpectation[][]

		const blackRow = [
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
			[ Diagonal.Solid, HoundazzleFill.Black ],
		]
		const whiteRow = [
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
			[ Diagonal.Solid, HoundazzleFill.White ],
		]
		const bottomLeftTile = [
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
			blackRow,
			whiteRow,
		] as HoundazzleSectionExpectation[][]

		const bottomRightTile = partB.concat(partA)

		topLeftTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 0, 0 ] as Address,
					tileSize,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		topRightTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 1, 0 ] as Address,
					tileSize,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		bottomLeftTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 0, 1 ] as Address,
					tileSize,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})

		bottomRightTile.forEach((expectedSectionRows, row) => {
			expectedSectionRows.forEach((expectedSection, col) => {
				const areaOrigin = calculateAreaOrigin({
					gridAddress: [ 1, 1 ] as Address,
					tileSize,
					sectionAddress: [ col, row ] as Address,
					sectionResolution: 16,
				})

				expectSection({ expectedSection, areaOrigin, areaSize: tileSize })
			})
		})
	})
})

type CalculateAreaOrigin = {
	({}: { gridAddress: Address, tileSize: number, sectionAddress: Address, sectionResolution: number }): Coordinate,
}

const calculateAreaOrigin: CalculateAreaOrigin = ({ gridAddress, tileSize, sectionAddress, sectionResolution }) => [
	gridAddress[ 0 ] * tileSize + sectionAddress[ 0 ] * tileSize / sectionResolution,
	gridAddress[ 1 ] * tileSize + sectionAddress[ 1 ] * tileSize / sectionResolution,
]