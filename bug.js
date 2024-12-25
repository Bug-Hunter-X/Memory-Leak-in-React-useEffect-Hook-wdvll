```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Incorrect logic for setting up the interval
    const interval = setInterval(() => {
      setCount(prevCount => prevCount + 1);
    }, 1000);  //This will cause memory leak because the interval is not cleared

    return () => {
      //Missing clearInterval to prevent memory leak
    };
  }, []);

  return <div>Count: {count}</div>;
}
```