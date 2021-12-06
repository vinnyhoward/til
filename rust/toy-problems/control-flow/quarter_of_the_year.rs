// Quarter of the year

// Given a month as an integer from 1 to 12, return to which quarter of the year it belongs as an integer number.

// For example: month 2 (February), is part of the first quarter; month 6 (June), is part of the second quarter; 
// and month 11 (November), is part of the fourth quarter.

fn quarter_of(month: u8) -> u8 {
    match month {
        1..=3 => 1,
        4..=6 => 2,
        7..=9 => 3,
        10..=12 => 4,
        _ => unreachable!(),
    }
}