import React from 'react';

class ProfileClass extends React.Component {
    render() {
        function montoToStr(num) {
            return num > 12 || num < 1
                ? null
                : 'января,февраля,марта,апреля,мая,июня,июля,августа,сентября,октября,ноября,декабря'.split(',')[
                num - 1
                    ];
        }

        const date = this.props.registredAt.toLocaleString('ru-RU', {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric'
        }).replaceAll('.', ' ');
        const day = date.slice(0, 2);
        const year = date.slice(6, 10);
        const month = montoToStr(date.slice(4, 6));
        const dateStr = day + ' ' + month + ' ' + year;

        return (
            <div>
                <div style={{fontSize: "20px"}}>Привет, <b>{this.props.name.slice(0, 4)}!</b></div>
                <div>Дата регистрации: {dateStr}</div>
            </div>)
    }
}

export default ProfileClass;