from turtle import *
import math

# Name your Turtle.
t = Turtle()

# Set Up your screen and starting position.
setup(500,300)
x_pos = -250
y_pos = -150
t.setposition(x_pos, y_pos)

### Write your code below:
sides = input("Enter the number of sides: ")
print("Your shape will have ", sides, ".")
pendown()
while(sides>0):
  forward(100)
  right(120)
  sides -= 1
penup()





# Close window on click.
exitonclick()
