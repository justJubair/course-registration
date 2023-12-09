# Course Registration
[Here's the link for live site](https://chilly-carpenter.surge.sh/) 

**Project Features:**
1. You can select any course and it will be added to the cart, with respective price, credit time, and title.
2. Intially you have total 20 hr credit time, as you proceed to select courses you're credit hour will decrease with relation with your courses.
3. You're total credit hour cannot exceed more than 20 hr, if it does you'll get an error saying credit hour exceeds.
4. You can't select a single course twice, if you do it will throw an error saying, "Already selected".

**State Management**
- There are mainly four states in this project. The first one is for the course selection. Initially the state was an empty array and when a course got selected that has been placed in that empty array. The second one is for the remaining credit hour calculation. Initial state is 20 and as you proceed to select courses the state changes to deduct the respective credit time for each selected courses. The third state is very similar to the second one. It's basically used to calculate the total credit hour. The initial state is zero and as a user proceed to select courses the state changes to sum the credit hours. The fourth and last state is very simple. It used to get the total price of selected courses. Very similar to the previous states, the initial state value is zero and the setPrice function sets the sum of all the selected courses price to the state called price.

