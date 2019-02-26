function main() {

	var thd = -0.7 //top hinges depth
	var shell = difference(cylinder({r1:2.1, h:10,r2:2.7 }),cylinder({r1:1.8,r2:2.2, h: 10}))
	shell = intersection(cube({size: [10,5,10]}).translate([-5,-1,0]), shell)
	// shell = difference(shell, cylinder({r: 1, h:10}).translate([-7, -0.8,-5]).rotateY(90))
	// shell = difference(shell, cylinder({r: 2, h:10}).translate([-5, -0.8,-5]).rotateY(90))
	// shell = difference(shell, cylinder({r: 3, h:10}).translate([-10,3,-5]).rotateY(90))

	var cutout = polygon([[-2,0], [6,0],[4.5,1], [2,2], [1,2]])
	.extrude({offset:[0,0,10]})
	.rotateY(90)
	.translate([-5,-1,7])

	var cutout2 = polygon([[0,-0.5],[0,2],[5,2]])
	.extrude({offset:[0,0,10]})
	.rotateY(90)
	.translate([-5,1,10])

	var cutout3 = polygon([[0,-1],[0,2],[5,2]])
	.extrude({offset:[0,0,10]})
	.rotateY(270)
	.translate([5,1,0])


	shell = union(cylinder({r:1, h:1}).translate([-10,thd,-2.7]).rotateY(90), shell)
	shell = union(cylinder({r:1, h:1}).translate([-10,thd,1.7]).rotateY(90), shell)
	shell = difference(shell, cutout)
	shell = difference(shell, cutout2)
	shell = difference(shell, cutout3)
	return shell;
}
