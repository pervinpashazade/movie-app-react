import {
    configureStore,
    combineReducers,
    getDefaultMiddleware,
} from '@reduxjs/toolkit';
import apiMiddleware from './middleware/api';

// // reducers
// import { authReducer } from './reducers/auth';
// import { profileReducer, tenantReducer } from './reducers/profile';

// import { kassaReducer } from './reducers/settings/kassa';
// import { vezifelerReducer } from './reducers/settings/vezifeler';
// import { anbarReducer } from './reducers/settings/anbar';
// import { muqavileTypesReducer } from './reducers/settings/muqavile';
// import { mehsulReducer } from './reducers/settings/mehsul';
// import { rolesReducer } from './reducers/settings/roles';
// import { hrReducer } from './reducers/settings/hr';
// import { serialNumberPrefixReducer } from './reducers/settings/serialNumberPrefix';

// import { invoicesReducer } from './reducers/operations/add/invoices';
// import { advancePaymentReducer } from './reducers/operations/add/advancePayment';
// import { cashBoxBalanceReducer } from './reducers/operations/add/cashBoxBalance';
// import { currenciesReducer } from './reducers/operations/add/currencies';
// import { convertCurrency } from './reducers/operations/add/currencies';
// import { expenseItemsByCatalogId } from './reducers/operations/add/expenseItemsByCatalogId';
// import { hrmEmployeesReducer } from './reducers/operations/add/hrmEmployees';
// import { financeReportCashFlowReducer } from './reducers/finance/reports';

// import { structureReducer } from './reducers/structure';
// import { employeesReducer } from './reducers/employees';
// import { stockReducer } from './reducers/stock';
// import { productReducer } from './reducers/product';
// import { salesAndBuysReducer } from './reducers/salesAndBuys';
// import { loadingReducer } from './reducers/loading';
// import { permissionsReducer } from './reducers/permissions';
// import { catalogsReducer } from './reducers/catalog';
// import { salesOperationsReducer } from './reducers/operations';
// import { financeOperationsReducer } from './reducers/finance/operations';
// import { contactsReducer } from './reducers/relations';
// import { contractsReducer } from './reducers/contracts';
// import { expenseCatalogReducer } from './reducers/expenseCatalog';
// import { transactionCatalog } from './reducers/operations/add/transactionCatalog';
// import { expenseItems } from './reducers/expenseItems';
// import { settlementsReducer } from './reducers/settlements';
// import { workSchedulesReducer } from './reducers/hrm/attendance/workSchedules';
// import { workScheduleDaysReducer } from './reducers/hrm/attendance/workScheduleDays';
// import { nonWorkingDaysReducer } from './reducers/hrm/attendance/nonWorkingDays';
// import { workersReducer } from './reducers/hrm/workers';
// import { hrmCalendarReducer } from './reducers/hrm/calendars';
// import { attachmentReducer } from './reducers/attachment/index';
// // import { salesReportReducer } from './reducers/salesReport/index';
// import { expenseReportReducer } from './reducers/expenseReport';
// import { employeeActivitiesReducer } from './reducers/employeeActivity';
// import { vacationReducer } from './reducers/employeeActivity/employeeActivityVacation';
// import { sickLeaveReducer } from './reducers/employeeActivity/employeeActivitySickLeave';
// import { businessTripReducer } from './reducers/employeeActivity/employeeActivityBusinessTrip';
// import { timeOffReducer } from './reducers/employeeActivity/employeeActivityTimeOff';
// import { appointmentReducer } from './reducers/employeeActivity/employeeActivityAppointment';
// import { fireReducer } from './reducers/employeeActivity/employeeActivityFire';
// import { partnersReducer } from './reducers/partners';
// import { goodsReducer } from './reducers/goods';
// import { ordersReducer } from './reducers/orders';
// import { measurementsReducer } from './reducers/measurements';
// import { newContactsReducer } from './reducers/contacts-new';
// // Operations
// import { goodsTurnoversReducer } from './reducers/operations/goods-turnovers';
// import { soldItemsReducer } from './reducers/operations/sold-items';
// import { purchasedItemsReducer } from './reducers/operations/purchased-items';
// // jobs
// import {
//     parametersReducer,
//     appealsReducer,
//     interviewReducer,
//     vacanciesReducer,
//     announcementsReducer,
// } from './reducers/jobs';
// import { appealsCountsReducer } from './reducers/jobs/appeals/appeals-counts';

// // hrm
// import {
//     attendanceReducer,
//     reportReducer,
//     hrmFinesReducer,
//     hrmTimecardReducer,
// } from './reducers/hrm';

// import { usersReducer } from './reducers/users';

// import { contactReducer } from './reducers/contact';
// import { subscriptionReducer } from './reducers/subscription';
// import { apiNotificationsReducer } from './reducers/apiNotifications';

// // dashboard
// import { dashboardFinanceReducer } from './reducers/dashboard/finance';

// // terminal
// import { terminalCommandReducer } from './reducers/proTerminal';

// //recievables and payables
// import { recievablesAndPayablesReducer } from './reducers/recievablesAndPayables';
// import { vatInvoicesReducer } from './reducers/vat-invoices';

// // Reports
// import {
//     salesReportReducer,
//     debtsTurnoversReducer,
//     balanceSheetReducer,
// } from './reducers/reports';

const appReducer = combineReducers({
    // authReducer,
    // loadings: loadingReducer,
    // kassaReducer,
    // vezifelerReducer,
    // anbarReducer,
    // muqavileTypesReducer,
    // mehsulReducer,
    // rolesReducer,
    // profileReducer,
    // tenantReducer,
    // structureReducer,
    // employeesReducer,
    // stockReducer,
    // productReducer,
    // permissionsReducer,
    // catalogsReducer,
    // salesOperationsReducer,
    // financeOperationsReducer,
    // contactsReducer,
    // contractsReducer,
    // invoicesReducer,
    // advancePaymentReducer,
    // expenseCatalogReducer,
    // expenseItems,
    // settlementsReducer,
    // hrReducer,
    // serialNumberPrefixReducer,
    // workSchedulesReducer,
    // transactionCatalog,
    // workScheduleDaysReducer,
    // nonWorkingDaysReducer,
    // workersReducer,
    // hrmCalendarReducer,
    // attachmentReducer,
    // // salesReportReducer,
    // expenseReportReducer,
    // employeeActivitiesReducer,
    // vacationReducer,
    // sickLeaveReducer,
    // businessTripReducer,
    // timeOffReducer,
    // appointmentReducer,
    // fireReducer,
    // // jobs
    // parametersReducer,
    // appealsReducer,
    // interviewReducer,
    // vacanciesReducer,
    // announcementsReducer,
    // contactReducer,
    // currenciesReducer,
    // appealsCountsReducer,

    // // hrm
    // attendanceReducer,
    // reportReducer,
    // hrmTimecardReducer,
    // hrmFinesReducer,
    // usersReducer,

    // subscriptionReducer,

    // // notifications
    // apiNotificationsReducer,

    // dashboardFinanceReducer,

    // // terminal
    // terminalCommandReducer,

    // convertCurrency,
    // cashBoxBalanceReducer,

    // expenseItemsByCatalogId,
    // hrmEmployeesReducer,
    // financeReportCashFlowReducer,

    // salesAndBuysReducer,
    // //partners
    // partnersReducer,
    // //goods
    // goodsReducer,

    // // orders
    // ordersReducer,

    // // measurements
    // measurementsReducer,

    // // recievables and payablesReducer
    // recievablesAndPayablesReducer,
    // newContactsReducer,

    // // good-turnovers
    // goodsTurnoversReducer,
    // soldItemsReducer,
    // purchasedItemsReducer,
    // vatInvoicesReducer,

    // // reports
    // salesReport: salesReportReducer,
    // balanceSheet: balanceSheetReducer,
    // debtsTurnovers: debtsTurnoversReducer,
});

const rootReducer = (state, action) => {
    if (action.type === 'LOGOUT') {
        return undefined;
    }
    return appReducer(state, action);
};

export default function configureAppStore() {
    const store = configureStore({
        reducer: rootReducer,
        middleware: [...getDefaultMiddleware(), apiMiddleware],
    });
    return store;
}