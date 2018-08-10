// all dimensions are in mm
// structure is: declaration, variables, calls

//declarations:
module main_chassis(mcha_width = 600, mcha_height = 880, mcha_thickness = 100, head_space = 350, head_sides_tallness= 150) {
	difference() {
		union(){
			cube([mcha_width,mcha_thickness, mcha_height]);
			translate([(mcha_width/2) - (head_space/2), 0, mcha_height - head_sides_tallness]) {
				difference() {
					cube([head_space, head_space, head_sides_tallness]);
					translate([mcha_thickness/2, mcha_thickness * 1,0]) {
						cube([head_space -mcha_thickness, (head_space-(mcha_thickness)), head_sides_tallness]);
					}
				}
			}
		}
		
	}
}

//vars:
	main_chassis_width = 600;
	main_chassis_thickness = 100;
	main_chassis_height = 880;

//calls:
translate([-main_chassis_width/2, -main_chassis_thickness/2, -main_chassis_height/2]) {
	main_chassis(main_chassis_width, main_chassis_height, main_chassis_thickness);
}
