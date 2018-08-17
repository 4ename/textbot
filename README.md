Texter bot for OWOP (Fuck The Developer Of Web Displays)
Usage: encryptString(text,delay) (what you want to type, speed of typing)*Lower delays may not fly with the OWOP server, as these characters are 5x7.*
How it works: Each "letter" has 35 "h" values, which determine if to erase or place a pixel. Some lowercase letters have 49 or 56 "h" values.
In the "wasp"(NOT the insect that stings) function, it will run the "sp" function, with variable 3 ("u") being set to false.
In the "sp" function, it will set a pixel determined by "h", at the "x" and "y" values for x and y coordinate respectivaly, and will allow you to undo if you have the u function set to false.
In the "tp" function, it will teleport the player.
In the "placeLetter" function, it will set pixels of a letter according to the "i" and "j" values. The letters are 7 lines of 5 "h" values. The "n" value picks what letter to place
In the addLetter function, it will add a letter in the "letters" array, and add the data array (7 lines of 5 "h" values in one array) to letters[character code].
License:


MIT License

Copyright (c) 2018 4ename

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
