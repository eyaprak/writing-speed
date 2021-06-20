import React, { createContext } from 'react';

export const ThemeContext = createContext();

class ThemeContextProvider extends React.Component {
    state = {
        isDarkTheme: false,
        dark: {
            app: 'bg-dark',
            navbar: 'navbar-light bg-warning',
            toogleButton: 'btn btn-outline-dark',
            button: "btn-success",
            card: 'bg-soft-gray border-danger text-white'
        },
        light: {
            app: 'bg-light',
            navbar: 'navbar-dark bg-dark',
            toogleButton: 'btn btn-outline-light',
            button: "btn-outline-success",
            card: 'bg-light border-info'
        }
    }

    getTheme = () => {
        const { isDarkTheme, dark, light } = this.state;
        return isDarkTheme ? dark : light;
    }

    changeTheme = () => {
        this.setState({
            isDarkTheme: !this.state.isDarkTheme
        })
    }

    render() {
        return (
            <ThemeContext.Provider value={{ ...this.state, getTheme: this.getTheme, changeTheme: this.changeTheme }}>
                {this.props.children}
            </ThemeContext.Provider>
        );
    }
}

export default ThemeContextProvider;