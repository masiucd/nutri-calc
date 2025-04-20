import {toast} from "sonner";
import {
	recommendedCarbs,
	recommendedFats,
	recommendedProtein,
} from "./recommended-macros";

export function copyToClipBoard(calculatedData: number) {
	if ("clipboard" in navigator) {
		navigator.clipboard.writeText(
			`Your daily caloric needs are ${calculatedData} calories. \n 
			Recommended macros: \n
			Protein: ${recommendedProtein(calculatedData)} g \n
			Fats: ${recommendedFats(calculatedData)} g \n
			Carbs: ${recommendedCarbs(calculatedData)} g \n
			`,
		);
		toast("Results copied to clipboard!");
	} else {
		toast("Your browser does not support the Clipboard API.");
	}
}
