interface IInterfaceTestRoot {
    property: string;
    method(parameter: string): void;
}

interface IInterfaceTest extends IInterfaceTestRoot {
    property1: string;
    method1(parameter: string): void;
};

export { IInterfaceTest, IInterfaceTestRoot };
