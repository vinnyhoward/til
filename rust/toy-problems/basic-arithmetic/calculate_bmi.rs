// Calculate BMI

// Write function bmi that calculates body mass index (bmi = weight / height2).

// if bmi <= 18.5 return "Underweight"

// if bmi <= 25.0 return "Normal"

// if bmi <= 30.0 return "Overweight"

// if bmi > 30 return "Obese"

fn main() {
    fn bmi(weight: u32, height: f32) -> &'static str {
        let squared_height: f32 = height.powf(2.0);
        let converted_weight: f32 = weight as f32; 
        let calculated_bmi: f32 = converted_weight / squared_height;

        if calculated_bmi <= 18.5 {
            return "Underweight"
        } else if calculated_bmi <= 25.0 {
            return "Normal"
        } else if calculated_bmi <= 30.0 {
            return "Overweight"
        } else {
            return "Obese"
        }
    }

    
    println!("{}", bmi(50, 1.80)); // "Underweight"
    println!("{}", bmi(80, 1.80)); // "Normal"
    println!("{}", bmi(90, 1.80)); // "Overweight"
    println!("{}", bmi(110, 1.80)); // "Obese"
}
