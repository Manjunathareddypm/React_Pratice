import logo from './logo.svg';
import './App.css';
import Greet from './components/Greet';
import Welcome from './components/Welcome';
import Hello from './components/Hello';
import Message from './components/Message';
import Counter from './components/counter';
import FunctionClick from './components/FunctionClick';
import ClassClick from './components/ClassClick';
import EventBind from './components/EventBind';
import ClassCounter from './HOOKs/classcounter.js';
import HookCounter from './HOOKs/HookCounter';
import HookCounterTwo from './HOOKs/HookCounterTwo';
import HookCounterThree from './HOOKs/HookCounterThree'
import HookCounterFour from './HOOKs/HookCounterFour';
import Review from './HOOKs/Review';
import Review1 from './HOOKs/Review1'
import HelloWorld from './dailyparctice/FunHelloWorld';
import ClaHelloWorld from './dailyparctice/ClaHelloWorld';
import Hello1 from './dailyparctice/JSXHello';
import LifeCycleA from './components/LifeCycleA';
import ClassCounterOne from './HOOKs/ClassCounterOne';
import HookCounterOne from './HOOKs/HookCounterOne';
import FunctionalComponent from './dailyparctice/FunctionalComponet';
import ClassComponent from './dailyparctice/ClassComponet';
import Counter1 from './dailyparctice/Counter1';
import UseStateFunction from './dailyparctice/useStateFunction';


function App() {
  return (
    <div className="App"> 
    {/* <EventBind /> */}
    {/* <Counter /> */}
    {/* <FunctionClick /> */}
    {/* <ClassClick /> */}
      {/* <Greet name='Bruce' heroName='Batman'>
        <p>This is Children</p>
      </Greet>
      <Greet name='Clark' heroName='SuperMan'>
        <button>Action</button>
      </Greet>
      <Greet name='Rana' heroName='Villan'/> */}
      {/* <Welcome name='Bruce' heroName='Batman'/>
      <Welcome name='Clark' heroName='SuperMan'/>
      <Welcome name='Rana' heroName='Villan'/> */}
      {/* <Hello /> */}
      {/* <Message /> */}
      {/* <ClassCounter /> */}
      {/* <HookCounter /> */}
      {/* <HookCounterTwo /> */}
      {/* <HookCounterThree /> */}
      {/* <HookCounterFour /> */}
      {/* <Review /> */}
      {/* <Review1 /> */}
      {/* <HelloWorld />
      <ClaHelloWorld />
      <Hello1 /> */}
      {/* <LifeCycleA /> */}
      {/* <ClassCounterOne /> */}
      {/* <HookCounterOne /> */}

      <FunctionalComponent name='Manju' lastname='Reddy'> <p>
        hello child
      </p>
      </FunctionalComponent>
      <FunctionalComponent name='natha'/>
      <FunctionalComponent name='PM'/>
      {/* <ClassComponent name='Reddy'/> */}
      <Counter1 />
      <UseStateFunction />
    </div>
  );
}

export default App;
