


async function handler(event, context){


    class TestClass {
        constructor(){
            console.log('Calling a modern JS feature!')
        }
    }

    const testClass = new TestClass();

    console.log('Hello from JS lambda!!!')
}

export { handler }