function setup()  {

   createCanvas(700, 400);
   background('rgba(200, 0, 150, .25)');

}  // end setup()

function draw()   {

   /* Create the outline of the rectangle by rendering the
      points at top left, top right, bottom left, bottom
      right, and the center.
   */

   point(0, 0);      // Top left point
   point(699, 0);    // Top right point
   point(0, 399);    // Bottom left point
   point(699, 399);  // Bottom right point
   point(349, 199);  // Center X, Y point

   // Fill in line from top left to top right.

   for (var increment = 1; increment <= 698; increment++)   {

      point(increment, 0);

   }  // end for

   // Fill in line from top right to bottom right.

   for (var increment = 1; increment <= 398; increment++)   {

      point(699, increment);

   }  // end for

   // Fill in line from bottom right to bottom left.


   for (var decrement = 697; decrement >= 1; decrement--) {

      point(decrement, 399);

   }  // end for

   // Fill in line from bottom left to top left.

   for (var decrement = 398; decrement >= 1; decrement--)   {

      point(0, decrement);

   }  // end for

   // Draw left half of diagonal line from top left to bottom right.

   point(1, 1);
   point(2, 2);
   point(3, 3);
   point(4, 4);
   point(5, 5);
   point(6, 6);
   point(7, 7);
   point(8, 8);
   point(9, 9);
   point(10, 10);
   point(11, 11);
   point(12, 12);
   point(13, 13);
   point(14, 14);
   point(15, 15);
   point(16, 16);
   point(17, 17);
   point(18, 18);
   point(19, 19);
   point(20, 20);

   point(21, 21);
   point(22, 22);
   point(23, 23);
   point(24, 24);
   point(25, 25);
   point(26, 26);
   point(27, 27);
   point(28, 28);
   point(29, 29);
   point(30, 30);
   point(31, 31);
   point(32, 32);
   point(33, 33);
   point(34, 34);
   point(35, 35);
   point(36, 36);
   point(37, 37);
   point(38, 38);
   point(39, 39);
   point(40, 40);

   point(41, 41);
   point(42, 42);
   point(43, 43);
   point(44, 44);
   point(45, 45);
   point(46, 46);
   point(47, 47);
   point(48, 48);
   point(49, 49);
   point(50, 50);
   point(51, 51);
   point(52, 52);
   point(53, 53);
   point(54, 54);
   point(55, 55);
   point(56, 56);
   point(57, 57);
   point(58, 58);
   point(59, 59);
   point(60, 60);

}  // end draw()
