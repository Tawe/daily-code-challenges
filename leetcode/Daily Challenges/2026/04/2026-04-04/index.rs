struct Solution;

impl Solution {
    pub fn decode_ciphertext(encoded_text: String, rows: i32) -> String {
        let rows = rows as usize;
        let s: Vec<char> = encoded_text.chars().collect();
        if s.is_empty() {
            return String::new();
        }
        let cols = s.len() / rows;
        let mut out = String::with_capacity(s.len());
        for i in 0..cols {
            for j in 0..rows {
                if i + j < cols {
                    out.push(s[j * cols + j + i]);
                }
            }
        }
        out.trim_end().to_string()
    }
}

fn main() {
    println!(
        "{}",
        Solution::decode_ciphertext("ch   ie   pr".into(), 3)
    );
    println!(
        "{}",
        Solution::decode_ciphertext("iveo    eed   l te   olc".into(), 4)
    );
    println!("{}", Solution::decode_ciphertext("coding".into(), 1));
}
