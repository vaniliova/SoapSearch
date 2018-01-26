angular
	.module('FirstNgApp')
	.factory('firstNgFactory', function() {

		var firstNgData = [
		  	{
				"type": "Olive Tree",
				"oil": "Olive Oil, Coconut Oil, Rice Oil, Almond Oil",
				"price": 1,
				"lye": "NaOH",
				"image": "Soap1",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."

			},
			{
				"type": "Olive Garden",
				"oil": "Olive Oil, Coconut Oil, Castor Oil, Almond Oil",
				"price": 2.5,
				"lye": "KOH",
				"image": "Soap2",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
			},
			{
				"type": "Rose Tree",
				"oil": "Olive Oil, Coconut Oil, Palm Oil, Macadamia Oil",
				"price": 2.7,
				"lye": "NaOH",
				"image": "Soap3",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
			},
			{
				"type": "Olive Tree",
				"oil": "Olive Oil, Coconut Oil, Rice Oil, Sunflower Oil",
				"price": 1.2,
				"lye": "NaOH",
				"image": "Soap4",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."

			},
			{
				"type": "Olive Garden",
				"oil": "Olive Oil, Coconut Oil, Castor Oil, Peanut Oil",
				"price": 2.5,
				"lye": "KOH",
				"image": "Soap5",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
			},
			{
				"type": "Rose Tree",
				"oil": "Olive Oil, Coconut Oil, Palm Oil, Macadamia Oil",
				"price": 2.7,
				"lye": "NaOH",
				"image": "Soap6",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
			},
			{
				"type": "Olive Tree",
				"oil": "Olive Oil, Palm Oil, Rice Oil, Almond Oil, Castor Oil",
				"price": 1.2,
				"lye": "NaOH",
				"image": "Soap7",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."

			},
			{
				"type": "Olive Garden",
				"oil": "Olive Oil, Coconut Oil, Castor Oil, Almond Oil",
				"price": 2.5,
				"lye": "KOH",
				"image": "Soap8",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
			},
			{
				"type": "Rose Tree",
				"oil": "Olive Oil, Coconut Oil, Palm Oil, Peanut Oil",
				"price": 2.7,
				"lye": "NaOH",
				"image": "Soap9",
				"recipe": "Cover your work area with newspaper. Put your gloves and other protective wear on. Measure your water into the quart canning jar. Have a spoon ready. Measure your lye, making sure you have exactly ¼ cup. Slowly pour the lye into the water, stirring as you go. Stand back while you stir to avoid the fumes. When the water starts to clear, you can allow it to sit while you move to the next step."
			}
	  	];

	  	function getFirstNg() {
	  		return firstNgData;
	  	}

	  	return {
	  		getFirstNg: getFirstNg
	  	}

	});