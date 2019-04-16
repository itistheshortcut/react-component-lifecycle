- The only method that is required in a sub component of React Class-based Component is `render()` method.

- A component has several lifecycle methods that we can override to make our component to behave the way we plan it to. They are categorized into 4 groups:

  - Mounting
  - Updating
  - Error boundaries
  - Unmounting

## Constructor

**Constructor is always the **first** method to be called**. This is not React feature, it is the default behavior of a class.

```javascript
constructor(props){
    super(props)

    this.state = {
        something: something
    }
}
```

A constructor takes `props` as its object, and since our component is a sub-class of `Component`, we need to call super to inherit all properties from the parent class.

Constructor is the only place to define `state`.

With ES6 syntax, we can define state of a component without re-defined the constructor, however, underthe hood, the constructor is still called, and the state is still created in the constructor.

## componentDidMount

**componentDidMount is called **right after** `render()` method**, it means right after the component is added into the DOM. This method will not be called again when the component is rerendered.

```javascript
componentDidMount(){
    // Do something
}
```

## componentDidUpdate

**componentDidUpdate is called called **right after `render()` everytime the component is rerendered****

```javascript
componentDidUpdate(prevProps, prevState, snapshot){
    // Something here
}
```

## componentWillUnmount

**componentWillUnmount is called **right before the component is removed from the DOM****

```javascript
componentWillUnmount(){
    // Do something
}
```

## shouldComponentUpdate

```javascript
shouldComponentUpdate(nextProps, nextState){
    return true
}
```

**shouldComponentUpdate returns `true` by default**. This method is to let React know if the component should be rerendered or not. Normally, React is smart enough to know the answer by itself, however, maybe in some cases, for some reason we do not want our component to rerender. If so, use this method very **carefully** or else you could mess your app's performance up.

## static getDerivedStateFromProps

```javascript
static getDerivedStateFromProps(props, state){
    // Do something
}
```

**This is a static method, once it is called, it will be excecute before every other methods**. The purpose of this method is to give us a chance to give the values from props transfer to the state

## getSnapshotBeforeUpdate

```javascript
getSnapshotBeforeUpdate(prevProps, prevState){
    return null
}
```

**This method is used to capture some props that are not stored in the state before the component is rerendered**. Whatever is returned from this method, will be passed into `componentDidUpdate` as the `snapshot` parameter.

## componentDidCatch

```javascript
componentDidCatch(err, info){
    // Do something
}
```

**This method belongs to the Error boundaries category**. Usually, when there is an error in rendering a component, the app will be crashed. This method allow the app to perform normally and display the error if neccessary.
