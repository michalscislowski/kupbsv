import React from 'react';
import Brightness2Icon from '@material-ui/icons/Brightness2'; //moon
import Brightness7Icon from '@material-ui/icons/Brightness7'; //sun
import {
  ThemeProvider,
  createGlobalStyle
} from 'styled-components';
import useTheme from './useTheme';
import style from 'styled-theming';

const getBackground = style('mode', {
    light: '#eee',
    dark: '#0a0e12'
  });

const getForeground = style('mode', {
    light: '#111',
    dark: '#cdcdcd',
});

const getOffset = style('mode', {
    dark: 'translateX(23px)'
});

const getBorder = style('mode', {
    dark: 'solid 1px #cdcdcd',
    light: 'none'
});

const getBoxColor = style('mode', {
    dark: 'brown',
    light: 'yellow'
});

const GlobalStyle = createGlobalStyle`
body {
  background-color: ${getBackground};
  color: ${getForeground};
}
.ball {
    transform: ${getOffset};
}
.label {
    border: ${getBorder};
}
.box {
    background: ${getBoxColor};
}
`;

export default function darkMode() {
    const theme = useTheme();

    return (
        <ThemeProvider theme={theme}>
            <>
                <GlobalStyle />
                    <main>
                        <div>
                            <input type="checkbox" className="checkbox" id="chk" />
                            <label className="label" for="chk" 
                                onClick={e =>
                                    theme.setTheme(
                                    theme.mode === 'dark'
                                        ? { ...theme, mode: 'light' }
                                        : { ...theme, mode: 'dark' }
                                    )
                                }>
                                <a className="moon"><Brightness2Icon style={{ fontSize: 18 }}/></a>
                                <a className="sun"><Brightness7Icon style={{ fontSize: 18 }}/></a>
                                <div className="ball"></div>
                            </label>
                        </div>
                        <style>{`
                        * {
                            box-sizing: border-box;
                        }
                        .checkbox {
                            opacity: 0;
                            position: absolute;
                        }

                        .label {
                            background-color: #111;
                            border-radius: 50px;
                            cursor: pointer;
                            display: flex;
                            align-items: center;
                            justify-content: space-between;
                            padding: 5px;
                            position: relative;
                            height: 26px;
                            width: 50px;
                            transform: scale(1.15);
                        }
                        
                        .label .ball {
                            background-color: #fff;
                            border-radius: 50%;
                            position: absolute;
                            left: 2px;
                            height: 22px;
                            width: 22px;
                            transition: transform 0.2s linear;
                        }

                        .moon {
                            color: #f1c40f;
                            transform: scaleX(-1);
                        }
                        
                        .sun {
                            color: #f39c12;
                        }
                        `}</style>
                    </main>
                </>
        </ThemeProvider>
    );
}