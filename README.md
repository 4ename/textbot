Texter bot for OWOP (Fuck The Developer Of Web Displays)
Usage: encryptString(text,delay) (what you want to type, speed of typing)*Lower delays may not fly with the OWOP server, as these characters are 5x7.*
How it works: Each "letter" has 35 "h" values, which determine if to erase or place a pixel. Some lowercase letters have 49 or 56 "h" values.
In the "wasp"(NOT the insect that stings) function, it will run the "sp" function, with variable 3 ("u") being set to false.
In the "sp" function, it will set a pixel determined by "h", at the "x" and "y" values for x and y coordinate respectivaly, and will allow you to undo if you have the u function set to false.
In the "tp" function, it will teleport the player.
In the "placeLetter" function, it will set pixels of a letter according to the "i" and "j" values. The letters are 7 lines of 5 "h" values. The "n" value picks what letter to place
In the addLetter function, it will add a letter in the "letters" array, and add the data array (7 lines of 5 "h" values in one array) to letters[character code].
License:
