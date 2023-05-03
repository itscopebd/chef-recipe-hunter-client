import React from 'react';
import "./newsletter.css"
const Newsletter = () => {
    return (

        <div className='subscribe-wrapper my-20'>
            <div className='subscribe'>

                <div className='container flex mx-auto flex-col md:flex-row md:px-0 px-1'>
                    <div className='w-12/12 md:w-6/12 mb-4 text-center md:text-left md:mb-0'>
                        <h4 class="subs-title">Stay Informed About Special Offers</h4>
                        <p className='subs-des'>For Exclusive Deals, Coupons, News and More!</p>
                    </div>
                    <div className='w-12/12 md:w-6/12'>
                        <div className="form-control">
                            <div className="input-group">
                                <input type="text" placeholder="Search…" className="input input-bordered" />
                                <button className="btn btn-square bg-warning text-sm">
                                 Subscribe
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Newsletter;