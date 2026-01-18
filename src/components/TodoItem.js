import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { theme } from '../utils/theme';

export default function TodoItem({ item, onToggle, onDelete }) {
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.contentContainer}
                onPress={onToggle}
                activeOpacity={0.7}
            >
                <View style={[styles.checkbox, item.completed && styles.checkboxChecked]}>
                    {item.completed && <View style={styles.checkboxInner} />}
                </View>
                <Text style={[styles.text, item.completed && styles.textCompleted]}>
                    {item.text}
                </Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.deleteButton} onPress={onDelete}>
                <Text style={styles.deleteText}>×</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: theme.colors.surface,
        padding: theme.spacing.m,
        marginBottom: theme.spacing.s,
        borderRadius: theme.borderRadius.m,
        borderWidth: 1,
        borderColor: 'rgba(255,255,255,0.05)',
    },
    contentContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    checkbox: {
        width: 24,
        height: 24,
        borderRadius: 6,
        borderWidth: 2,
        borderColor: theme.colors.primary,
        marginRight: theme.spacing.m,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checkboxChecked: {
        backgroundColor: theme.colors.primary,
    },
    checkboxInner: {
        width: 10,
        height: 10,
        backgroundColor: '#FFF',
        borderRadius: 2,
    },
    text: {
        fontSize: theme.fontSize.m,
        color: theme.colors.text,
        flex: 1,
    },
    textCompleted: {
        textDecorationLine: 'line-through',
        color: theme.colors.textSecondary,
    },
    deleteButton: {
        padding: theme.spacing.s,
        marginLeft: theme.spacing.s,
    },
    deleteText: {
        color: theme.colors.danger,
        fontSize: 24,
        lineHeight: 24,
        fontWeight: 'bold',
    },
});
