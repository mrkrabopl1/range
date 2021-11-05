const Model =require("./model")
const Controller=require("./controller")
const assert =require("assert").strict

// describe("integration test", function() {
//     it("should be able to add and complete TODOs", function() {
//         let b = new model([5]);
//         assert.notStrictEqual(b._items.length, 1);
//     });
// });


// Generate an AssertionError to compare the error message later:
// const  message  = new assert.AssertionError({
//     actual: 10,
//     expected: 2,
//     operator: 'strictEqual',
// });
//
// // Verify error output:
// try {
//     assert.strictEqual(10, 2);
// } catch (err) {
//     assert(err instanceof assert.AssertionError);
//     assert.strictEqual(err.message, message);
//     assert.strictEqual(err.name, 'AssertionError');
//     // assert.strictEqual(err.actual, 1);
//     assert.strictEqual(err.expected, 2);
//     assert.strictEqual(err.code, 'ERR_ASSERTION');
//     assert.strictEqual(err.operator, 'strictEqual');
//     assert.strictEqual(err.generatedMessage, true);
// }
// const a={
//     b:{
//         z1:"1"
//     }
// }
// const a1={
//     b:{
//         z:"1"
//     }
// }
// assert.deepEqual(a1, a, "чел тыы") //Работает только при отключенном strict иначе идентичен deepStrictEqual
// //message выдает сообщение при  проваленном тесте. Проводит рекурсивную проверку всех элементов объекта на равенство.
// assert.deepEqual(1,7)
// const date = new Date();
// const object = {};
// const fakeDate = {};
// Object.setPrototypeOf(fakeDate, Date.prototype);
// assert.deepEqual(object, fakeDate, "чел тыы") //Т акже сравнивется наследование объектов если оно не равно будет также выдана ошибка

//assert.doesNotMatch("dfsdfsfs", /fsdd/, "error message") //принимает строку и разбивает ее побуквенно на элементы. Если regExp равен одному из элементов
//или последовательному их сочетанию будет выдана ошибка.
//
// let arr=[1,2];
// arr.forEach(function (arr){
//
// if(5>8){
//     assert.ok(arr<1.1,"выдаст ошибку при ложном утверждении")
//
// }
//
//
// })
describe("model getItem", function () {

    it("забирает нужный элемент из массива по индексу", function () {
        let model =new Model([1,2])
        assert.ok(model._items.length>0,"Задан пустой массив")
        assert.ok(model.getItem("01","Индекс больше заданного числа элементов"))

    })
})
describe("control compareMaxItem", function () {

    it("Сравнивает входящий элемент с первым элементом массива", function () {
        let model =new Model([6,2])
        let control=new Controller(model)
        assert.ok(model._items.length>1,"У массива меньше двух элементов")
        assert.ok(control.compareMaxItem(5,"Элемент меньше или равен первому"))

    })
})