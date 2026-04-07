struct Robot {
    width: i32,
    height: i32,
    perim: i32,
    offset: i32,
    moved: bool,
}


impl Robot {

    fn new(width: i32, height: i32) -> Self {
        Self {
            width,
            height,
            perim: 2 * (width + height) - 4,
            offset: 0,
            moved: false,
        }
    }
    
    fn step(&mut self, num: i32) {
        self.moved = true;
        self.offset = (self.offset + num % self.perim) % self.perim;
    }
    
    fn get_pos(&self) -> Vec<i32> {
        let w = self.width;
        let h = self.height;
        let s = self.offset;

        if s <= w - 1 {
            vec![s, 0]
        } else if s <= w + h - 2 {
            vec![w - 1, s - (w - 1)]
        } else if s <= 2 * w + h - 3 {
            vec![w - 1 - (s - (w + h - 2)), h - 1]
        } else {
            vec![0, h - 1 - (s - (2 * w + h - 3))]
        }
    }
    
    fn get_dir(&self) -> String {
        let w = self.width;
        let h = self.height;
        let s = self.offset;

        if s == 0 {
            if self.moved {
                "South".to_string()
            } else {
                "East".to_string()
            }
        } else if s < w {
            "East".to_string()
        } else if s < w + h - 1 {
            "North".to_string()
        } else if s < 2 * w + h - 2 {
            "West".to_string()
        } else {
            "South".to_string()
        }
    }
}

#[test]
fn test_robot() {
    let mut robot = Robot::new(6, 3);
    robot.step(2);
    assert_eq!(robot.get_pos(), vec![4, 0]);
    assert_eq!(robot.get_dir(), "East");
    robot.step(2);
    assert_eq!(robot.get_pos(), vec![4, 0]);
    assert_eq!(robot.get_dir(), "East");
}