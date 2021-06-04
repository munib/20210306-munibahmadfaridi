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
    expected: {
        "result": [
            {
                "bmiCategory": "Moderately obese",
                "bmiRange": "30 - 34.9",
                "bmiValue": "32.83",
                "gender": "Male",
                "healthRisk": "Medium risk",
                "height": 171,
                "weight": 96
            },
            {
                "bmiCategory": "Moderately obese",
                "bmiRange": "30 - 34.9",
                "bmiValue": "32.79",
                "gender": "Male",
                "healthRisk": "Medium risk",
                "height": 161,
                "weight": 85
            },
            {
                "bmiCategory": "Normal weight",
                "bmiRange": "18.5 - 24.9",
                "bmiValue": "23.77",
                "gender": "Male",
                "healthRisk": "Low risk",
                "height": 180,
                "weight": 77
            },
            {
                "bmiCategory": "Normal weight",
                "bmiRange": "18.5 - 24.9",
                "bmiValue": "22.50",
                "gender": "Female",
                "healthRisk": "Low risk",
                "height": 166,
                "weight": 62
            },
            {
                "bmiCategory": "Moderately obese",
                "bmiRange": "30 - 34.9",
                "bmiValue": "31.11",
                "gender": "Female",
                "healthRisk": "Medium risk",
                "height": 150,
                "weight": 70
            },
            {
                "bmiCategory": "Overweight",
                "bmiRange": "25 - 29.9",
                "bmiValue": "29.40",
                "gender": "Female",
                "healthRisk": "Enhanced risk",
                "height": 167,
                "weight": 82
            }
        ],
        "totalOverweight": 3
    }
}
