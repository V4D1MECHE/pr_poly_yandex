ymaps.ready(init)
    
    
function init() {
    var myMap = new ymaps.Map('map', {
        center: [55.753994, 37.622093],
        zoom: 9,
        // Добавим панель маршрутизации.
        controls: ['routePanelControl']
    });

    var control = myMap.controls.get('routePanelControl');

    control.options.set({  
        maxWidth: '320px',
    });

    var multiRoutePromise = control.routePanel.getRouteAsync();
    multiRoutePromise.then(function(multiRoute) {
      multiRoute.options.set({
        // Цвет метки начальной точки.
        wayPointStartIconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<span>Вы здесь</span>'),
        // Цвет метки конечной точки.
        wayPointFinishIconContentLayout: ymaps.templateLayoutFactory.createClass(
            '<span>Место назначения</span>'), 
        // Внешний вид линий (для всех маршрутов).
      });  
    }, function (err) {
      console.log(err); 
    });
    // Зададим состояние панели для построения машрутов.
    control.routePanel.state.set({
        // Тип маршрутизации.
        type: 'pedestrian',
        // Включим возможность задавать пункт отправления в поле ввода.
        fromEnabled: true,
        // Включим возможность задавать пункт назначения в поле ввода.
        toEnabled: true,
        // Адрес или координаты пункта назначения.
    });
    
    // Зададим опции панели для построения машрутов.
    control.routePanel.options.set({
        // Запрещаем показ кнопки, позволяющей менять местами начальную и конечную точки маршрута.
        allowSwitch: false,
        // Включим определение адреса по координатам клика.
        // Адрес будет автоматически подставляться в поле ввода на панели, а также в подпись метки маршрута.
        reverseGeocoding: true,
        // Зададим виды маршрутизации, которые будут доступны пользователям для выбора.
        types: {  pedestrian: true }
    });


    // Создаем кнопку, с помощью которой пользователи смогут менять местами начальную и конечную точки маршрута.
    var switchPointsButton = new ymaps.control.Button({
        data: {content: "Поменять местами", title: "Поменять точки местами"},
        options: {selectOnClick: false, maxWidth: 160}
    });

    
   

    // Объявляем обработчик для кнопки.
    switchPointsButton.events.add('click', function () {
        // Меняет местами начальную и конечную точки маршрута.
        control.routePanel.switchPoints(); 
    });
    myMap.controls.add(switchPointsButton);
}