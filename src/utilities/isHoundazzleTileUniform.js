import colorUtilities from '../../../../src/utilities/colorUtilities'
import allOrientationsAreTheSame from './allOrientationsAreTheSame'

export default ({ tileColors, options }) => {
	const { allColorsAreTheSame, isTileUniform } = colorUtilities
	return isTileUniform({ tileColors }) &&
		allColorsAreTheSame(options.tileDazzle.tileColors) &&
		allOrientationsAreTheSame({ orientations: options.tileDazzle.tileOrientations })
}