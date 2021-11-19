// Keep Hydrated!

// Nathan loves cycling.

// Because Nathan knows it is important to stay hydrated, he drinks 0.5 litres of water per hour of cycling.

// You get given the time in hours and you need to return the number of litres Nathan will drink, rounded to the smallest value.

fn main() {
    fn litres(time: f64) -> i32 {
        let time_rounded = time.floor();
        let water_consumed = (time_rounded * 0.5).floor() as i32;
        
        water_consumed
    }

    println!("{}", litres(2.)) // 1
    println!("{}", litres(1.4)) // 0
    println!("{}", litres(12.3)) // 6
    println!("{}", litres(0.82)) // 0
    println!("{}", litres(11.8)) // 5
    println!("{}", litres(1787.)) // 893
    println!("{}", litres(0.)) // 0
}


