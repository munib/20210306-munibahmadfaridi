export const TEST_DATA = {
    received: [
        {
            "gender": "Male",
            "height": 171,
            "weight": 96
        },
        {
            "gender": "Male",
            "height": 161,
            "weight": 85
        },
        {
            "gender": "Male",
            "height": 180,
            "weight": 77
        },
        {
            "gender": "Female",
            "height": 166,
            "weight": 62
        },
        {
            "gender": "Female",
            "height": 150,
            "weight": 70
        },
        {
            "gender": "Female",
            "height": 167,
            "weight": 82
        }
    ],
    expected: [
        {
            "gender": "Male",
            "height": 171,
            "weight": 96,
            "bmiValue": "32.83",
            "bmiCategory": "Moderately obese",
            "bmiRange": "30 - 34.9",
            "healthRisk": "Medium risk"
        },
        {
            "gender": "Male",
            "height": 161,
            "weight": 85,
            "bmiValue": "32.79",
            "bmiCategory": "Moderately obese",
            "bmiRange": "30 - 34.9",
            "healthRisk": "Medium risk"
        },
        {
            "gender": "Male",
            "height": 180,
            "weight": 77,
            "bmiValue": "23.77",
            "bmiCategory": "Normal weight",
            "bmiRange": "18.5 - 24.9",
            "healthRisk": "Low risk"
        },
        {
            "gender": "Female",
            "height": 166,
            "weight": 62,
            "bmiValue": "22.50",
            "bmiCategory": "Normal weight",
            "bmiRange": "18.5 - 24.9",
            "healthRisk": "Low risk"
        },
        {
            "gender": "Female",
            "height": 150,
            "weight": 70,
            "bmiValue": "31.11",
            "bmiCategory": "Moderately obese",
            "bmiRange": "30 - 34.9",
            "healthRisk": "Medium risk"
        },
        {
            "gender": "Female",
            "height": 167,
            "weight": 82,
            "bmiValue": "29.40",
            "bmiCategory": "Overweight",
            "bmiRange": "25 - 29.9",
            "healthRisk": "Enhanced risk"
        }
    ]

}
