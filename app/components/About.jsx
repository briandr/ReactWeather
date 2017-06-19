var React = require('react');

var About = (props) => {
    return (
        <div>
            <h1 className="text-center page-title">About</h1>
            <p>This is a weather application built on React.</p>
            <p>
                Here are some of the other tools I used:
            </p>
            <ol>
                <li>
                    <a href="https://facebook.github.io/react">React</a> - This is the JavaScript framework used.
                </li>
                <li>
                    <a href="http://openweathermap.org">Openweathermap</a> - I used Open Weather Map to searh for weather data by city name.
                </li>
                <li>
                    <a href="https://www.heroku.com">Heroku</a>
                </li>
                <li>
                    <a hreft="http://foundation.zurb.com">Foundation</a>
                </li>
            </ol>
        </div>
    )    
};

module.exports = About;
