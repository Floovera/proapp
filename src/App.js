import 'normalize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import {TOPIC_DATA} from "./data/data";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {TopicsPage} from "./pages/TopicsPage";
import 'react-tabs/style/react-tabs.css';
import 'react-bootstrap/dist/react-bootstrap.min'
import "./services/firebase";
import {StudentsFromDbPage} from "./pages/StudentsFromDb";
import {FormPage} from "./pages/FormPage";
import {useLocalStorage} from "./hooks/useLocalStorage";
import {StudentsFromDbProvider} from "./contexts/StudentContext";
import {TopicsFromDbPage} from "./pages/TopicsFromDb";
import {TopicsFromDbProvider} from "./contexts/NewTopicContext";
import {OverviewPage} from "./pages/OverviewPage";

function ProvidedApp() {

    const [defaultTab,setDefaultTab] = useLocalStorage("defaultTabIndex",0);

  return (
      <Tabs defaultIndex={defaultTab} onSelect={(index) => setDefaultTab(index)}>

          <TabList>
              <Tab>To do list (d&d)</Tab>
              <Tab>Topics (d&d)</Tab>
              <Tab>Students</Tab>
              <Tab>Topics</Tab>
              <Tab>Overview</Tab>
          </TabList>
          <TabPanel>
              <FormPage/>
          </TabPanel>
          <TabPanel>
              <TopicsPage topiclist={TOPIC_DATA}/>
          </TabPanel>
          <TabPanel>
              <StudentsFromDbPage/>
          </TabPanel>
          <TabPanel>
              <TopicsFromDbPage/>
          </TabPanel>
          <TabPanel>
              <OverviewPage/>
          </TabPanel>
      </Tabs>
  );
}

function App() {
    return (
        <TopicsFromDbProvider>
            <StudentsFromDbProvider>
                <ProvidedApp/>
            </StudentsFromDbProvider>
        </TopicsFromDbProvider>

    );
}

export default App;

