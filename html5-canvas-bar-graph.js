
function BarGraph(ctx) {

  // Private properties and methods
	
  var that = this;
		
var y_rbc =[811, 798, 812, 805, 835, 827, 833, 836, 865, 849, 864, 1366, 2131, 2021, 1960, 2090, 2188, 2262, 2287, 2255,
 2382, 2589, 2823, 2806, 2872, 2815, 2818, 2758, 2870, 3165, 3445, 3697, 3982, 4192, 4331, 4408, 4459, 4444, 4441, 4447,
 4447, 4444, 4430, 4418, 4414, 4435, 4427, 4420, 4408, 4352, 4260, 4146, 4029, 3909, 3782, 3892];
var y_othassets = [41, 37, 40, 37, 40, 35, 44, 33, 57, 35, 39, 138, 0, 58, 46, 48, 47, 46, 45, 53, 54, 60, 47, 54, 46, 50, 48, 51, 47, 50, 48, 50,
 42, 44, 46, 42, 41, 38, 38, 39, 40, 40, 41, 41, 39, 40, 40, 40, 36, 34, 30, 29, 29, 27, 31, 54];
var y_res = [13, 10, 11, 8, 12, 9, 11, 12, 13, 13, 15, 167, 878, 804, 727, 959, 994, 1111, 1047, 985, 1002, 1472, 1651,
 1604, 1565, 1549, 1500, 1447, 1504, 1801, 2023, 2311, 2375, 2581, 2579, 2706, 2601, 2667, 2457, 2633, 2122, 2392, 2253,
 2000, 1845, 2234, 2076, 2149, 2046, 2094, 1918, 1802, 1622, 1600, 1456, 1469];
var y_currcir = [787, 791, 796, 794, 809, 808, 815, 814, 817, 814, 830, 849, 886, 903, 910, 915, 921, 935, 945, 960, 979,
 1009, 1030, 1042, 1070, 1100, 1114, 1135, 1160, 1178, 1197, 1213, 1232, 1270, 1285, 1294, 1333, 1360, 1370, 1391, 1417,
 1445, 1464, 1476, 1505, 1539, 1563, 1583, 1611, 1640, 1669, 1690, 1710, 1726, 1747, 1769];
var y_otherliab = [52, 34, 45, 40, 54, 45, 51, 43, 92, 57, 58, 488, 357, 372, 369, 264, 320, 262, 340, 363, 455, 168, 189,
 214, 283, 216, 252, 227, 253, 236, 273, 223, 417, 385, 513, 450, 566, 455, 652, 462, 948, 647, 754, 983, 1103, 702, 828,
 728, 787, 652, 703, 683, 726, 610, 610, 708];
var y_amb = [804, 809, 812, 810, 823, 823, 829, 829, 831, 830, 847, 1136, 1712, 1753, 1674, 1936, 1995, 2014, 1994, 1962,
 2048, 2497, 2685, 2638, 2641, 2640, 2648, 2612, 2742, 3012, 3291, 3590, 3728, 3931, 3989, 4001, 4017, 4059, 3961, 4060,
 3793, 3873, 3773, 3572, 3595, 3822, 3795, 3830, 3825, 3727, 3618, 3521, 3347, 3287, 3260, 3253];
var y_reqres = [46, 43, 43, 40, 43, 41, 41, 41, 43, 43, 44, 48, 63, 59, 64, 62, 67, 67, 66, 66, 74, 76, 78, 94, 100, 101,
 101, 107, 117, 116, 117, 120, 134, 135, 140, 140, 152, 150, 150, 147, 160, 157, 164, 167, 176, 177, 184, 182, 193, 191,
 191, 190, 199, 195, 200, 201];
var y_excres = [2, 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 267, 797, 823, 732, 995, 1046, 1050, 1022, 974, 1036, 1452, 1618, 1545,
 1519, 1486, 1483, 1418, 1519, 1769, 2031, 2308, 2422, 2580, 2619, 2621, 2593, 2606, 2499, 2579, 2280, 2330, 2208, 1989,
 1982, 2168, 2113, 2129, 2088, 1960, 1824, 1706, 1508, 1429, 1378, 1347];
var y_m1 = [1376, 1401, 1391, 1364, 1361, 1378, 1376, 1364, 1367, 1374, 1413, 1461, 1630, 1656, 1653, 1662, 1709, 1686,
 1719, 1776, 1850, 1895, 1986, 2177, 2199, 2247, 2284, 2382, 2460, 2512, 2527, 2569, 2668, 2739, 2813, 2852, 2934, 2978,
 3023, 3016, 3177, 3181, 3251, 3375, 3352, 3519, 3581, 3582, 3581, 3660, 3671, 3688, 3719, 3729, 3816, 3892];
var y_curr = [728, 736, 741, 743, 752, 752, 757, 762, 760, 758, 773, 789, 824, 847, 853, 863, 863, 874, 885, 904, 920, 942,
 967, 984, 1005, 1032, 1049, 1072, 1096, 1106, 1128, 1148, 1164, 1197, 1216, 1228, 1263, 1283, 1296, 1322, 1342, 1364,
 1386, 1403, 1424, 1454, 1481, 1506, 1529, 1554, 1586, 1611, 1628, 1641, 1662, 1689];
var y_check = [641, 648, 620, 613, 614, 632, 604, 603, 614, 641, 637, 663, 749, 773, 797, 799, 809, 832, 826, 858, 933,
 961, 1020, 1141, 1202, 1225, 1259, 1339, 1387, 1424, 1410, 1467, 1540, 1602, 1620, 1634, 1679, 1742, 1735, 1688, 1752, 1859,
 1853, 1922, 1963, 2022, 2061, 2092, 2122, 2132, 2086, 2104, 2122, 2171, 2195, 2230];
 //
  
  var drawText = function(graphAreaHeight, xpos, ypos, text, align="right") {
	  var ratio;
	  var largestValue;
	  var maxBarHeight;
	  var barHeight;
	  var barYPos;
	  
      ctx.fillStyle = "#333";
      ctx.font = "bold 12px sans-serif";
      ctx.textAlign = align;

	  maxBarHeight = graphAreaHeight - 25;
	  // Determine the largest bar
	  largestValue = 5000;
      // Set the ratio of current bar compared to the maximum
      heightRatio = ypos / largestValue;
      barHeight = heightRatio * maxBarHeight;
	  posRatio = ypos / largestValue;
	  barYPos = posRatio * maxBarHeight;
	  
	 
       // Use try / catch to stop IE 8 from going to error town
       try {
         ctx.fillText(text,
         that.margin + xpos, graphAreaHeight - barYPos);
       } catch (ex) {}
  }
  
  
  var drawBar = function(graphAreaHeight, xpos, ypos, yval, color) {
	  var barWidth;
	  var border = 2;
	  var ratio;
	  var gradient;
	  var largestValue;
	  var maxBarHeight;
	  var barHeight;
	  var barYPos;
	  
	  
	  barWidth = 20;
	  maxBarHeight = graphAreaHeight - 25;
	  
	  // Determine the largest bar
	  largestValue = 5000;
	  
      // Set the ratio of current bar compared to the maximum
      heightRatio = yval / largestValue;
      barHeight = heightRatio * maxBarHeight;
	  posRatio = ypos / largestValue;
	  barYPos = posRatio * maxBarHeight;
        
      // Turn on shadow
      ctx.shadowOffsetX = 2;
      ctx.shadowOffsetY = 2;
      ctx.shadowBlur = 2;
      ctx.shadowColor = "#999";

      // Draw bar background
      ctx.fillStyle = "#333";
      ctx.fillRect(that.margin + xpos,
		  graphAreaHeight - barHeight - barYPos,
		  barWidth,
		  barHeight);
			
		// Turn off shadow
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 0;

		// Draw bar color if it is large enough to be visible
		if (barHeight > border * 2) {
			// Create gradient
			gradient = ctx.createLinearGradient(0, 0, 0, graphAreaHeight);
			gradient.addColorStop(1-heightRatio, color);
			gradient.addColorStop(1, "#ffffff");

			ctx.fillStyle = gradient;
			// Fill rectangle with gradient
			ctx.fillRect(that.margin + border + xpos,
			  graphAreaHeight - barHeight + border - barYPos,
			  barWidth - border * 2,
			  barHeight - border * 2);
		}
		
    }
		
    // Draw method updates the canvas with the current display
	var draw = function () {
							
	  var graphAreaX = 0;
	  var graphAreaY = 0;
	  var graphAreaWidth = that.width;
	  var graphAreaHeight = that.height;
	  var i;

	  i = Math.floor((that.sliderVal - 1) * 56 / 100); // divide by length of data arrays
	  
		// Update the dimensions of the canvas only if they have changed
	  if (ctx.canvas.width !== that.width || ctx.canvas.height !== that.height) {
		ctx.canvas.width = that.width;
		ctx.canvas.height = that.height;
	  }
				
	  // Draw the background color
	  ctx.fillStyle = that.backgroundColor;
	  ctx.fillRect(0, 0, that.width, that.height);
					
	  // x axis labels make room	
      graphAreaHeight -= 40;
				
	  // Draw the bars
	  drawBar(graphAreaHeight, 80, 0, y_rbc[i], that.rbcColor);
	  drawBar(graphAreaHeight, 80, y_rbc[i], y_othassets[i], that.otherAssetColor);
	  drawText(graphAreaHeight, 70, y_rbc[i] - 300, parseInt(y_rbc[i], 10));
	  drawText(graphAreaHeight, 70, y_rbc[i] - 200, "RBC");
	  drawText(graphAreaHeight, 70, y_rbc[i] + y_othassets[i], parseInt(y_othassets[i], 10));
	  drawText(graphAreaHeight, 70, y_rbc[i] + y_othassets[i] + 100, "Other");
	  drawText(graphAreaHeight, 85, -140, "ASSETS", "center");
	  
	  drawBar(graphAreaHeight, 180, 0, y_res[i], that.reservesColor);
	  drawBar(graphAreaHeight, 180, y_res[i], y_currcir[i], that.currColor);
	  drawBar(graphAreaHeight, 180, y_res[i] + y_currcir[i], y_otherliab[i], that.otherLiabColor);
	  drawText(graphAreaHeight, 170, Math.max(0, y_res[i] - 200), parseInt(y_res[i], 10));
	  drawText(graphAreaHeight, 170, Math.max(100, y_res[i] - 100), "Reserves");
	  drawText(graphAreaHeight, 170, y_res[i] + y_currcir[i] - 300, parseInt(y_currcir[i], 10));
	  drawText(graphAreaHeight, 170, y_res[i] + y_currcir[i] - 200, "Currency");
	  drawText(graphAreaHeight, 170, y_res[i] + y_currcir[i] + 100, parseInt(y_otherliab[i], 10));
	  drawText(graphAreaHeight, 170, y_res[i] + y_currcir[i] + 200, "Other");
	  drawText(graphAreaHeight, 185, -140, "LIABILITIES", "center");

	  drawBar(graphAreaHeight, 300, 0, y_amb[i], that.ambColor);
	  drawText(graphAreaHeight, 290, y_amb[i] - 200, parseInt(y_amb[i], 10));
	  drawText(graphAreaHeight, 290, y_amb[i] - 100, "Mon Base");
	  
	  drawBar(graphAreaHeight, 450, 0, y_reqres[i], that.reqResColor);
	  drawBar(graphAreaHeight, 450, y_reqres[i], y_excres[i], that.excessResColor);
	  drawText(graphAreaHeight, 440, y_reqres[i] - 100, parseInt(y_reqres[i], 10));
	  drawText(graphAreaHeight, 440, y_reqres[i], "Req Rsrvs");
	  drawText(graphAreaHeight, 440, Math.max(200, y_reqres[i] + y_excres[i] - 300), parseInt(y_excres[i], 10));
	  drawText(graphAreaHeight, 440, Math.max(300, y_reqres[i] + y_excres[i] - 200), "Exc Rsrvs");
	  drawText(graphAreaHeight, 450, -140, "RESERVES", "center");
	  
	  drawBar(graphAreaHeight, 570, 0, y_check[i], that.checkColor);
	  drawBar(graphAreaHeight, 570, y_check[i], y_curr[i], that.currCircColor);
	  drawText(graphAreaHeight, 560, y_check[i] - 300, parseInt(y_check[i], 10));
	  drawText(graphAreaHeight, 560, y_check[i] - 200, "Check Dep");
	  drawText(graphAreaHeight, 560, y_check[i] + y_curr[i] - 300, parseInt(y_curr[i], 10));
	  drawText(graphAreaHeight, 560, y_check[i] + y_curr[i] - 100, "Currency");
	  drawText(graphAreaHeight, 560, y_check[i] + y_curr[i] - 200, "ex Banks");
	  drawText(graphAreaHeight, 570, -140, "M1 COMPONENTS", "center");


	  drawBar(graphAreaHeight, 680, 0, y_m1[i], that.m1Color);
	  drawText(graphAreaHeight, 670, y_m1[i] - 300, parseInt(y_m1[i], 10));
	  drawText(graphAreaHeight, 670, y_m1[i] - 200, "M1");
	  var year = 2006 + Math.floor(i / 4);
	  var month = ((i * 3) % 12) + 1;
      drawText(graphAreaHeight, 650, 4500, month.toString() + "/" + year.toString());
	  };

  // Public properties and methods
	
  this.width = 800;
  this.height = 700;	
  this.maxValue;
  this.margin = 5;
  this.curArr = [];
  this.backgroundColor = "#fff";
  this.animationInterval = 100;
  this.animationSteps = 10;
  
  this.rbcColor = "Tomato";
  this.otherAssetColor = "Silver";
  this.reservesColor = "SlateBlue";
  this.currColor = "SpringGreen";
  this.otherLiabColor = "SlateGray";
  this.reqResColor = "Violet";
  this.excessResColor = "RoyalBlue";  
  this.ambColor = "Teal";
  this.m1Color = "Red";
  this.checkColor = "SteelBlue";
  this.currCircColor = "SeaGreen";

	 this.update = function () {

		// Animate from the start array to the end array
	    draw();
	}; 
}
