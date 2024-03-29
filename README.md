<h1>Fitness Tracker</h1>

<h2>Description:</h2>
<p>The fitness tracker app is an innovative web-based application that is designed with the aim of assisting users in achieving their fitness goals. The application has a user-friendly interface that makes it easy to use and navigate. The app's primary features include tracking daily exercises, recording daily meals, monitoring the user's weight, and keeping track of the user's progress over time. The app utilizes the latest technologies and programming languages such as React, Bootstrap, JavaScript, and authentication to ensure it is efficient and secure.</p>

<ul>This was a group project completed during a 1-week sprint.
My teammates were:
<li>Selina Lavery (https://github.com/sml-40)</li>
<li>Hal Evans (https://github.com/halevans)</li>
<li>Ana Solcan (https://github.com/solcana)</li>
</ul>

<ul>Technologies: 
<li>React</li>
<li>Bootstrap</li>
<li>JavaScript</li>
<li>OAuth</li>
<li>Trello</li>
<li>Figma</li>

<h2>Brief</h2>

<p>Your team will be creating a full stack application using Express and MongoDB along with ReactJS a.k.a the MERN stack.</p>

<p>Use your imagination! You get to create whatever you want for this app. Though, you'll need to run your user stories, and wireframes, by your instructors to get their feedback and approval before you begin coding! Remember to keep things small and focus on mastering the fundamentals as scope creep/feature creep is the biggest pitfall for any project!</p>

<p>Identify what you need to build and accomplish to meet project expectations and identify everything else as stretch goals. If you meet your MVP (Minimum Viable Product) ahead of schedule, you can decide which remaining goals to focus on for the remainder of your time.</p>

<p>You will be working as a team for this project, everyone must contribute on a team. If 1 person does not contribute or 1 person does all the work then the entire team will fail the project requirements. If you pair program then please include the other persons GitHub name in the commit.</p>



<h2>Planning</h2>

<p>To plan this project, we started by doing some initial research on fitness tracker apps and the features they typically include. Based on this research, we created a list of requirements and began sketching out the basic layout and functionality of the app.</p>

<p>Once we had a basic idea of the app's functionality, we began creating an ERD and wireframes of the front end and UI using Figma. These wireframes helped us to solidify the layout and design of the app before moving on to the development stage</p>

<p>Finally, we used Trello to plan the sprint and track our progress throughout the development process. We assigned tasks to each day of the sprint, and used Trello to keep track of my progress and adjust my timeline as needed.</p>

<ol>
<li>Login page (authentication happens)</li>
<li>Profile Page / Dashboard (once logged in)</li>
<li>Workout Page (MODEL e.g. type of exercise: string, reps: number, weight: number .....)</li>
<li>General Blog/Article Page (e.g. food, workout tips etc.)</li>

#### Wireframes

![Wireframe for Login](/assets/Images/Login%20Page.png)

![Wireframe for Profile/Dashboard](/assets/Images/Profile_Dashboard.png)

![Wireframe for Exercise Page](/assets/Images/Workout%20Page.png)


<h2> ERD,/h2>

![Entity Relationship Diagram](/assets/Images/ERD.png)

<h2> Trello - Project Management </h2>

<img width="1399" alt="Screenshot 2023-02-17 at 09 20 43" src="https://user-images.githubusercontent.com/114579141/219604711-a7f46696-10e2-485e-93d4-acba3c634a4c.png">



<p>I was responsible for creating a graph component, which I used the following code for. This is a React function component that renders a fitness tracker web application, which allows users to track their workout data and visualize their progress over time in a line chart. Here is a detailed breakdown of the code:
</p>

<p>The Graph function is defined using the useState and useEffect hooks provided by React. useState is used to create a state variable called data that is initialized as an empty array. The state variable is updated using the setData function.</p>


<pre><code>function Graph() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const storedData = localStorage.getItem('workoutData');
    if (storedData) {
      setData(JSON.parse(storedData));
    } else {
      setData([]);
    }
  }, []);

</pre></code>

<p>The first useEffect hook is used to retrieve data from localStorage and set the initial state of the data variable. It runs only once on component mount, as it has an empty array as the second argument.</p>

<pre><code>useEffect(() => {
    localStorage.setItem('workoutData', JSON.stringify(data));
  }, [data]);
</pre></code>

<p>The second useEffect hook is used to save the workout data to localStorage every time the data state variable changes.</p>

<pre><code>const handleAddData = (e) => {
    e.preventDefault();
    const newDate = e.target.date.value;
    const newPushUps = parseInt(e.target.pushUps.value);
    const newPullUps = parseInt(e.target.pullUps.value);
    const newSitUps = parseInt(e.target.sitUps.value);
    const newBenchPress = parseInt(e.target.benchPress.value);
    const newSquats = parseInt(e.target.squats.value);
    setData([...data, { date: newDate, pushUps: newPushUps, pullUps: newPullUps, sitUps: newSitUps, benchPress: newBenchPress, squats: newSquats }]);
</pre></code>


<h2>Code Explanation</h2>

<p>A handleAddData function is defined to handle the submission of the workout data form. This function receives an event object as an argument, which is used to extract the values of the form fields. The function then updates the data state variable by adding a new object with the extracted data to the existing array of data. Finally, the function resets the form fields.</p>


<p>The Graph function returns a Container element from Bootstrap, which contains the header, form, and line chart. The header contains the title of the application, which is "Usman's Workout Intensity History". The Form element is used to collect the workout data from the user. It has six Form.Group elements for each of the workout exercises, and a Button element to submit the form.</p>

<p>The LineChart component from the Recharts library is used to render the line chart. It receives the workout data as the data prop and maps it to the x and y axis of the chart using the XAxis and YAxis components. The CartesianGrid component is used to draw the grid lines, and the Tooltip and Legend components are used to display additional information about the data points. The Line components are used to draw lines for each of the workout exercises, with a different color and shape for each exercise. The activeDot prop is used to highlight the data point on hover. Finally, the ResponsiveContainer component is used to ensure that the chart is responsive and adapts to different screen sizes.
</p>



<h2>Challenges</h2>

<p>
The project presented a major challenge for our team when it came to implementing user authentication. We had to navigate the complexity of integrating both JSON Web Tokens (JWT) and bcrypt into the app's architecture. As these technologies were unfamiliar to us, we had to conduct extensive research and experimentation to gain a better understanding of how they worked and how we could correctly implement them.</p>

<p>
In addition to the authentication challenges, we also encountered difficulties in designing the database structure. We needed to create an Entity-Relationship Diagram (ERD) that would effectively store and manage all the app's data. This required careful consideration of the relationships between different entities and how they would interact with one another. We also had to ensure that the database was easily accessible and that data retrieval was fast and efficient. </p>

<p>
To overcome these challenges, we had to work collaboratively and communicate effectively as a team. We shared knowledge and expertise, conducted extensive research, and experimented with different solutions until we found the optimal approach. We also had to remain flexible and adaptable, constantly tweaking our designs and code to ensure that the app was secure, functional, and user-friendly. </p>


<h2>Potential Improvements</h2>

<p>Better styling:
This can greatly enhance the user experience in a fitness tracking app. A clean and visually appealing design can make the app more engaging and encourage users to spend more time interacting with it. A well-designed interface can also help users to quickly and easily find the information they need, and provide a sense of organization and structure to the app's data. Additionally, thoughtful use of color, typography, and layout can help to convey important information and make the app feel more intuitive and user-friendly.
</p>

<h2>Wins and Takeaways</h2>


<p>One of the most significant victories was successfully implementing user authentication. This was a complex task that required a lot of research and experimentation with new technologies like JWT and bcrypt. It was satisfying to see the user authentication system work seamlessly and provide a secure environment for users to interact with the application. This victory not only allowed us to strengthen our coding skills but also gave us a sense of pride in creating a secure and functional application. </p>

<p>Another personal win for me during this project was learning how to use Recharts and chart.js. These two charting libraries helped me create some visually appealing and informative charts and graphs that made the application more user-friendly and engaging. Working with these libraries taught me valuable skills in data visualization, which will be useful in future projects. Overall, this project was a great opportunity for me to learn new skills and overcome challenges, and I am proud of the work I accomplished.
</p>

<p>Throughout this project, we gained valuable knowledge and experience in several areas. One key takeaway was the importance of careful planning and organization when designing a database structure. We realized that taking the time to plan the ERD in detail can save a lot of time and headaches down the line, especially when implementing complex features like data tracking and analysis.</p>

<p>Additionally, we learned the importance of staying up to date with new technologies and continuously expanding our knowledge base. Successfully implementing user authentication and learning how to use new charting libraries were both major victories for us, and they would not have been possible without a willingness to research and experiment with new tools and techniques.</p>

<p>Overall, this project taught us the value of perseverance, planning, and continuous learning. We are proud of the work we accomplished and feel better equipped to tackle even more complex projects in the future.
</p>

