import React from 'react';
import Pdf from "react-to-pdf";
const BlogPage = () => {
    return (
        <div className='container mx-auto py-20'>

           <h3 className='text-2xl font-bold pb-2'>Controlled </h3> 
           <p>controlled components refer to components that have their state and behavior controlled by the parent component. These components rely on props passed down from the parent component to update their state and behavior.</p>

           <h3 className='text-2xl font-bold py-2'>Uncontrolled  </h3> 
           <p>Uncontrolled components refer to components that manage their own state internally.</p>

           <h3 className='text-2xl font-bold py-2'> validate React props using PropTypes  </h3> 
           <p>Properties validation is a useful way to force the correct usage of the components. This will help during development to avoid future bugs and problems, once the app becomes larger. It also makes the code more readable, since we can see how each component should be used.
            PropTypes is used for props validation. If some of the props aren't using the correct type that we assigned, we will get a console warning.</p>

           <h3 className='text-2xl font-bold py-2'> Node Js </h3> 
           <p>Node.js is an open-source and cross-platform runtime environment for executing JavaScript code outside of a browser.</p>

           <h3 className='text-2xl font-bold py-2'> Express Js </h3> 
           <p>Express is a small framework that sits on top of Node.js’s web server functionality to simplify its APIs and add helpful new features. It makes it easier to organize your application’s functionality with middleware and routing.</p>

           <h3 className='text-2xl font-bold py-2'> Custom Hook </h3> 
           <p>A custom Hook is a JavaScript function whose name starts with ”use” and that may call other Hooks.</p>
           <p>That’s it! If you have code in a component that you feel would make sense to extract, either for reuse elsewhere or to keep the component simpler, you can pull that out into a function.</p>
        </div>
    );
};

export default BlogPage;