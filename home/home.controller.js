class HomeCtrl {
  constructor($scope) {
    'ngInject';

    this.name = 'AngularJS';
    this.strArrayLenght = 20;

    let selectedOptionId = '957';
    let Myarray = [
      { '957': '1269' },
      { '958': '1265' },
      { '956': '1259' },
      { '957': '1269' },
      { '947': '1267' }
    ];

    let filtered = Myarray.filter(function(element) {
      return Object.keys(element)[0] === selectedOptionId;
    });

    console.log(filtered);

    this.strArrayLenght = filtered;

    var SelectedOptionId = 95;

    var arrayObj = [
      { '957': '1269' },
      { '958': '1265' },
      { '956': '1259' },
      { '957': '1269' },
      { '947': '1267' }
    ];

    var result = arrayObj.some(function(o) {
      return SelectedOptionId in o;
    });

    if (result == '') {
      this.strArrayLenght = SelectedOptionId + ' not exists.';
      console.log(SelectedOptionId + ' not exists.');
    } else {
      this.strArrayLenght = SelectedOptionId + ' exists.';
      console.log(SelectedOptionId + ' exists.');
    }
  }
}

export default HomeCtrl;
