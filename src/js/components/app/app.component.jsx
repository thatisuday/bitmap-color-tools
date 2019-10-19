import React from 'react';
import { ChromePicker } from 'react-color';

// local dependencies
import { ColorValues } from 'components/color-values';

/**
 * @desc Entry component of the application single page application.
 */
export class App extends React.Component {
    constructor( props ) {
        super( props );

        // component state
        this.state = {
            colorPicker: {
                hex: '#000000',
                rgb: {
                    r: 0,
                    g: 0,
                    b: 0,
                    a: 1,
                },
                hsl: {
                    h: 0,
                    s: 0,
                    l: 0,
                    a: 1,
                },
            }
        };

        // bind methods to the instance
        this.handleColorChange = this.handleColorChange.bind( this );
    }

    // handle color change
    handleColorChange( color ) {
        this.setState( {
            colorPicker: color
        } );
    }

    // render
    render() {
        return (
            <div className='bm-app'>
                <p className='bm-app__title'>Bitmap Color Tools</p>
                <p className='bm-app__sub-title'>Generate color values for Bitmap images.</p>

                {/* color picker tool */}
                <div className='bm-app__color-picker'>
                    <div className='bm-app__color-picker__widget'>
                        <ChromePicker
                            color={ this.state.colorPicker.hex }
                            onChange={ this.handleColorChange }
                        />
                    </div>
                    <div className='bm-app__color-picker__values'>
                        <ColorValues color={ this.state.colorPicker }/>
                    </div>
                </div>

                {/* footer */}
                <div className='bm-app__footer'>
                    <p className='bm-app__footer__description'>I made this tool using <a target='_blank' href='https://casesandberg.github.io/react-color/'>React Color</a>, while working on an article about Bitmap images on <a target='_blank' href='https://medium.com/@thatisuday'>Medium</a>. Using this tool, you will be able to select a color value in multiple formats. This tool allows you to convert a color value to decimal number, CSS `color` property value, binary value as well as hexadecimal value.</p>

                    <p className='bm-app__footer__description'>Raise an issue on <a target='_blank' href='https://github.com/thatisuday/bitmap-color-tools'>Github</a> if you need any specific enhancement in this tool. You are always welcome to contribute to any of my public repositories to help other developers like us.</p>

                    <p className='bm-app__footer__made-by'>Made with ❤️ by <a target='_blank' href='https://medium.com/@thatisuday'>Uday Hiwarale</a></p>
                </div>

                
            </div>
        );
    }
}
