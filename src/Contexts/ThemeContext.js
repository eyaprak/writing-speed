import React, { createContext } from 'react';

export const ThemeContext = createContext();
const initState = {
    isDarkTheme: false,
        dark: {
            app: 'bg-dark',
            navbar: 'navbar-light bg-warning',
            toogleButton: 'btn btn-outline-dark',
            button: "btn-success text-white",
            card: 'bg-soft-gray border-danger text-white',
            table: 'table-dark'
        },
        light: {
            app: 'bg-light',
            navbar: 'navbar-dark bg-dark',
            toogleButton: 'btn btn-outline-light',
            button: "btn-outline-success",
            card: 'bg-light border-info',
            table: 'table-light'
        }
}
class ThemeContextProvider extends React.Component {
    state = initState

    componentDidMount(){
        const data = localStorage.getItem('theme');
        this.setState(data ? JSON.parse(data) : this.state )
    }

    componentDidUpdate() {
        localStorage.setItem('theme', JSON.stringify(this.state))
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