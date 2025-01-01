```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const handle = setInterval(() => {
      console.log("Hello");
    }, 1000);
    document.title = `You clicked ${count} times`;
    return () => {
      clearInterval(handle);
      document.title = 'Document Title'; // Reset title on unmount
    };
  }, [count]);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```