struct Solution;

impl Solution {
    pub fn two_edit_words(queries: Vec<String>, dictionary: Vec<String>) -> Vec<String> {
        let mut result = Vec::new();

        for query in queries {
            let mut matches = false;
            for dict in &dictionary {
                if Self::within_two_edits(&query, dict) {
                    matches = true;
                    break;
                }
            }
            if matches {
                result.push(query);
            }
        }

        result
    }

    fn within_two_edits(query: &str, dict: &str) -> bool {
        let mut diff = 0;
        for (a, b) in query.bytes().zip(dict.bytes()) {
            if a != b {
                diff += 1;
                if diff > 2 {
                    return false;
                }
            }
        }
        true
    }
}

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn example_1() {
        assert_eq!(
            Solution::two_edit_words(
                vec![
                    "word".to_string(),
                    "note".to_string(),
                    "ants".to_string(),
                    "wood".to_string()
                ],
                vec!["wood".to_string(), "joke".to_string(), "moat".to_string()]
            ),
            vec!["word".to_string(), "note".to_string(), "wood".to_string()]
        );
    }

    #[test]
    fn example_2() {
        assert_eq!(
            Solution::two_edit_words(vec!["yes".to_string()], vec!["not".to_string()]),
            Vec::<String>::new()
        );
    }
}