export function recommendedProtein(
	caloricNeeds: number,
	proteinPercentage = 0.3,
) {
	return Math.round((caloricNeeds * proteinPercentage) / 4);
}

export function recommendedFats(caloricNeeds: number, fatsPercentage = 0.25) {
	return Math.round((caloricNeeds * fatsPercentage) / 9);
}

export function recommendedCarbs(caloricNeeds: number, carbsPercentage = 0.45) {
	return Math.round((caloricNeeds * carbsPercentage) / 4);
}
