import { Units } from '../../../../../src/components'
import { Coordinate } from '../../../../../src/space'
import { Diagonal } from '../../../../../test/integration/helpers/types'

enum HoundazzleFill {
	Black,
	White,
}

type HoundazzleSectionExpectation = [ Diagonal, HoundazzleFill ]

type HoundazzleExpectSection = (_: {
	areaOrigin: Coordinate,
	areaSize: Units,
	expectedSection: [ Diagonal, HoundazzleFill ],
}) => void

export {
	HoundazzleFill,
	HoundazzleSectionExpectation,
	HoundazzleExpectSection,
}
