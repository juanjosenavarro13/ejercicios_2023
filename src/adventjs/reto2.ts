// Un millonario ha comprado una red social y no trae buenas noticias. Ha anunciado que cada vez que una jornada de trabajo se pierde por un día festivo, habrá que compensarlo con dos horas extra otro día de ese mismo año.

// Obviamente la gente que trabaja en la empresa no le ha hecho ni pizca de gracia y están preparando un programa que les diga el número de horas extras que harían en el año si se aplicara la nueva norma.

// Al ser trabajo de oficina, su horario laboral es de lunes a viernes. Así que sólo tienes que preocuparte de los días festivos que caen en esos días.

// Dado un año y un array con las fechas de los días festivos, devuelve el número de horas extra que se harían ese año:


export function countHours(year:number, holidays:string[]) {
    const getFechaCompleta = (year:number, holidays:string[]) => {
        return holidays.map((holiday) => `${holiday}/${year}`);
    };

    return (
        getFechaCompleta(year, holidays)
            .map((holiday) => {
                return new Date(holiday).getDay();
            })
            .filter((item) => item !== 0 && item !== 6).length * 2
    );
}
