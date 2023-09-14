import "./App.css";
import { Title } from "./components/Title";
import { ContributionCalendar } from "react-contribution-calendar";
import { getRandomDate, generateDataInRange } from "./utils/date";

function App() {
  const { randomStartDate, randomEndDate } = getRandomDate();

  return (
    <div>
      <Title tag="1" start="2023-01-01" end="2023-12-31" />
      <div className="light">
        <ContributionCalendar
          data={generateDataInRange("2023-01-01", "2023-12-31")}
          start="2023-01-01"
          end="2023-12-31"
          daysOfTheWeek={["", "Mon", "", "Wed", "", "Fri", ""]}
          textColor="#000"
          includeBoundary={true}
          startsOnSunday={true}
          cx={11}
          cy={11}
          cr={2}
          theme="grass"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
      <div className="spacer"></div>
      <Title tag="2" start="2023-01-01" end="2023-12-31" />
      <div className="light">
        <ContributionCalendar
          data={generateDataInRange("2023-01-01", "2023-12-31")}
          start="2023-01-01"
          end="2023-12-31"
          daysOfTheWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          textColor="#000"
          includeBoundary={true}
          startsOnSunday={true}
          cx={11}
          cy={11}
          cr={2}
          theme="emoji_positive"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
      <div className="spacer"></div>
      <Title tag="3" start={randomStartDate} end={randomEndDate} />
      <div className="light">
        <ContributionCalendar
          data={generateDataInRange(randomStartDate, randomEndDate)}
          start={randomStartDate}
          end={randomEndDate}
          daysOfTheWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          textColor="#000"
          includeBoundary={true}
          startsOnSunday={true}
          cx={11}
          cy={11}
          cr={0}
          theme="cherry"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
      <div className="spacer"></div>
      <Title tag="4" start="2023-01-01" end="2023-12-31" />
      <div className="dark">
        <ContributionCalendar
          data={generateDataInRange("2023-01-01", "2023-12-31")}
          start="2023-01-01"
          end="2023-12-31"
          daysOfTheWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          textColor="#fff"
          includeBoundary={true}
          startsOnSunday={true}
          cx={11}
          cy={11}
          cr={2}
          theme="dark_coral"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
      <div className="spacer"></div>
      <Title tag="5" start={randomStartDate} end={randomEndDate} />
      <div className="dark">
        <ContributionCalendar
          data={generateDataInRange(randomStartDate, randomEndDate)}
          start={randomStartDate}
          end={randomEndDate}
          daysOfTheWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          textColor="#fff"
          includeBoundary={true}
          startsOnSunday={true}
          cx={11}
          cy={11}
          cr={2}
          theme="dark_winter"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
      <div className="spacer"></div>
      <Title tag="6" start={randomStartDate} end={randomEndDate} />
      <div className="light">
        <ContributionCalendar
          data={generateDataInRange(randomStartDate, randomEndDate)}
          start={randomStartDate}
          end={randomEndDate}
          daysOfTheWeek={["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]}
          textColor="#000"
          includeBoundary={true}
          startsOnSunday={true}
          cx={12}
          cy={12}
          cr={12}
          theme="halloween"
          onCellClick={(_, data) => console.log(data)}
          scroll={false}
          style={{}}
        />
      </div>
      <div className="spacer"></div>
    </div>
  );
}

export default App;
