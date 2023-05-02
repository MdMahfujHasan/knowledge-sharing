/* eslint-disable */
import React from 'react';
import './QnA.css';

const QnA = () => {
    return (
        <div style={{ padding: '30px' }}>
            <h1 style={{ textAlign: 'center', color: 'indigo', fontSize: '3em', textDecorationLine: 'underline', marginTop: 0 }}>Q&A</h1>
            <h3 className='question'>What are the differences between props vs states?</h3>
            <p className='answer'>Props are short for properties, and they are used to pass data from one component to another. Props are read-only, which means they cannot be modified by the component that receives them. Props are passed down from a parent component to a child component, and they are used to customize the behavior and appearance of the child component. State, on the other hand, is used to manage the internal state of a component. State is mutable, which means it can be modified by the component itself. State is used to store data that can change over time, such as user input or data fetched from an API.</p>
            <h3 className='question'>How does useState work?</h3>
            <p className='answer'>In React, useState is a built-in hook that allows functional components to manage state. The useState hook is used to declare a state variable and its initial value, and it returns an array with two elements: the current state value and a function to update that value. By using useState, we can add state to functional components and update the UI based on user interaction and other events. The useState hook is a powerful tool for managing state in React applications.</p>
            <h3 className='question'>What is the purpose of useEffect other than fetching data?</h3>
            <p className='answer'>Although fetching data is a common use case for the useEffect hook in React, it can also be used for many other purposes. The useEffect hook allows you to perform side effects in a functional component, such as updating the document title, setting up event listeners, or subscribing to a data source.
                <ul>
                    <li>Updating the document title: You can use useEffect to update the document title based on the state of your component. This is useful when you want to provide more context to the user based on the current state of your application.</li>
                    <li>Setting up event listeners: You can use useEffect to add event listeners to the window or document. This is useful when you want to perform an action in response to a user interaction, such as scrolling or resizing the window.</li>
                    <li>Subscribing to a data source: You can use useEffect to subscribe to a data source, such as a WebSocket or a server-sent event stream. This is useful when you want to receive real-time updates from a server and update your component accordingly.</li>
                </ul>
            </p>
            <h3 className='question'>How does React work?</h3>
            <p className='answer'>React is a JavaScript library for building user interfaces. React follows the declarative programming paradigm, which means that you describe what you want the UI to look like, and React takes care of the rest. React uses a Virtual DOM (Document Object Model) to render UI changes efficiently. Here is a simplified overview of how React works:
                <ul>
                    <li>You create React components, which are JavaScript functions or classes that describe the UI.</li>
                    <li>You define the state and props of your components. The state is a way to store data that can change over time, while props are a way to pass data from one component to another.</li>
                    <li>React creates a Virtual DOM, which is a lightweight representation of the actual DOM.</li>
                    <li>When you update the state or props of a component, React compares the new Virtual DOM with the previous Virtual DOM to determine which parts of the UI need to be updated.</li>
                    <li>React updates the actual DOM only for the parts that need to be changed, minimizing the number of DOM updates and improving performance.</li>
                    <li>React provides a set of lifecycle methods that allow you to control what happens when a component is mounted, updated, or unmounted. For example, you can use the componentDidMount method to perform an action when the component is first rendered, or the componentWillUnmount method to clean up any resources when the component is removed from the page.</li>
                    <li>React also provides a set of built-in hooks, such as useState and useEffect, that allow you to manage state and perform side effects in functional components.</li>
                </ul>
            </p>
        </div>
    );
};

export default QnA;