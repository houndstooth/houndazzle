import state from '../../state/state'
import iterator from '../../utilities/iterator'
import shape from '../../components/shape'
import wrappedIndex from '../../utilities/wrappedIndex'
import substripeModulus from './substripeModulus'
import houndazzleShapes from './houndazzleShapes'
import calculateSubstripeCount from './calculateSubstripeCount'

export default ({ address, colors, stripeIndex, stripeCount, dazzle, coordinatesOptions, coordinatesFunction }) => {
	const { substripeOfSquare, substripeOfStripe } = houndazzleShapes
	const substripeIsOfStripe = !!coordinatesOptions
	coordinatesFunction = substripeIsOfStripe ? substripeOfStripe : substripeOfSquare

	let { substripeCount, dazzleContinuum } = state.colorConfig.houndazzle
	substripeCount = dazzleContinuum ? calculateSubstripeCount({ address, stripeIndex, stripeCount }) : substripeCount
	coordinatesOptions = coordinatesOptions || {}
	coordinatesOptions.substripeCount = substripeCount
	coordinatesOptions.orientation = wrappedIndex({ array: dazzle.orientations, index: stripeIndex })

	iterator(substripeCount).forEach(substripeIndex => {
		coordinatesOptions.substripeIndex = substripeIndex
		shape({
			address,
			colors: substripeModulus({ substripeIndex, nonDazzle: colors, dazzle: dazzle.colors }),
			stripeIndex,
			coordinatesFunction,
			coordinatesOptions
		})
	})
}
