import {create} from 'zustand';
import {immer} from 'zustand/middleware/immer';

interface Task {
	id: number;
	name: string;
	email: string;
	text?: string;
	complite?: boolean;
}

interface Filter {
	name?: string;
	email?: string;
	complite?: boolean | null;
}

interface State {
	tasks: Task[];
	filters: Filter;
	filteredTasks: Task[];
	sortById: string;
	setSortById: (order: string) => void;
	setState: (newTask: Task) => void;
	setFilters: (filters: Filter) => void;
	applyFilters: () => void;
	resetFilters: () => void;
}

export const useStore = create<State>()(
	immer((set) => ({
		tasks: [
			{
				id: 1,
				name: 'Eat at the Fat Duck',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
			{
				id: 2,
				name: 'Hike Skylight (4926 Ft)',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 3,
				name: 'Learn to Live For Today',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
			{
				id: 4,
				name: 'Attend Winter Olympics',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 5,
				name: 'Slow Dance in the Rain',
				email: 'user@user.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 6,
				name: 'Go Horseback riding in Texas',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 7,
				name: 'Do Ceramics',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
			{
				id: 8,
				name: 'Make Out With Someone',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: false,
			},
			{
				id: 9,
				name: 'Cook With a Celebrity Chef',
				email: 'admin@admin.com',
				text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas sit amet tempor enim. Aliquam nec dictum tortor.',
				complite: true,
			},
		],
		filteredTasks: [],
		filters: {
			name: '',
			email: '',
			complite: null,
		},
		sortById: 'asc',

		setFilters: (filters) =>
			set((state) => {
				state.filters = {...state.filters, ...filters};
			}),
		setSortById: (order) =>
			set((state) => {
				state.sortById = order;
			}),

		applyFilters: () => {
			set((state) => {
				let filtered = state.tasks;

				if (state.filters.name) {
					filtered = filtered.filter((task) => task.name.toLowerCase().includes(state.filters.name!.toLowerCase()));
				}

				if (state.filters.email) {
					filtered = filtered.filter((task) => task.email.toLowerCase().includes(state.filters.email!.toLowerCase()));
				}

				if (state.filters.complite !== undefined && state.filters.complite !== null) {
					filtered = filtered.filter((task) => task.complite === state.filters.complite);
				}

				filtered = filtered.sort((a, b) => {
					if (state.sortById === 'asc') {
						return a.id - b.id;
					} else {
						return b.id - a.id;
					}
				});

				state.filteredTasks = filtered;
			});
		},
		resetFilters: () => {
			set((state) => {
				state.filters = {};
				state.filteredTasks = state.tasks.slice().sort((a, b) => a.id - b.id);
			});
		},

		setState: (newTask: Task) =>
			set((state) => {
				state.tasks.unshift({
					id: newTask.id,
					name: newTask.name,
					email: newTask.email,
					text: newTask.text,
					complite: newTask.complite,
				});
				state.applyFilters();
			}),
	})),
);
